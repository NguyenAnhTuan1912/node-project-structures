import { NextFunction, Request, Response, Router } from "express";
import MyServer from "classes/MyServer";
import Joi from "joi";

export type HTTPMethods = "get" | "post" | "put" | "delete" | "patch";

export interface ServerOptions {
  port: string
}

export interface ServerBuilderOptions {
  server: MyServer
}

export interface APIHandler {
  path: string,
  getHandler: () => (req: Request, res: Response, next?: NextFunction) => Promise<any>
}

export interface RouterManager {
  install: () => void,
  getRouter: () => Router | undefined
}