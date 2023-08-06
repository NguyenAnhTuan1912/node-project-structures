import { Request, Response, Router, NextFunction } from "express";

import { HTTPMethods, RouterManager } from "types";

interface CreateRouterOptions {
  handlers: Array<{
    path: string,
    method: HTTPMethods,
    middelWares?: Array<(req: Request, res: Response, next?: NextFunction) => any>
    getHandler: () => (req: Request, res: Response, next?: NextFunction) => any
  }>
}

/**
 * This template use to create Express Router Manager.
 */
export function createRouterManager(options: CreateRouterOptions): RouterManager {
  const router = Router();
  const { handlers } = options;
  let isInstalled = false;

  return {
    getRouter: function() {
      try {
        if(!isInstalled) throw new Error("You must install all handler first!!!");
        return router;
      } catch (error: any) {
        console.error("Create Router Manager Error: ", error.message);
        return undefined;
      }
    },
    install: function() {
      for(let handler of handlers) {
        let middelWares = handler.middelWares ? handler.middelWares : [];
        switch(handler.method) {
          case "get": {
            router.route(handler.path).get(...middelWares, handler.getHandler());
            break;
          };
    
          case "post": {
            router.route(handler.path).post(...middelWares, handler.getHandler());
            break;
          };
    
          case "delete": {
            router.route(handler.path).delete(...middelWares, handler.getHandler());
            break;
          };
    
          case "put": {
            router.route(handler.path).put(...middelWares, handler.getHandler());
            break;
          };
    
          case "patch": {
            router.route(handler.path).patch(...middelWares, handler.getHandler());
            break;
          };
        }
        isInstalled = true;
      }
    }
  };
}