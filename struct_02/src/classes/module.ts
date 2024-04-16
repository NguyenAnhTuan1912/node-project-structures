/**
 * Classes in this file are used for inheritance.
 */

import { Utils } from "src/utils";

// Import types
import type { Express } from "express";
import type { Controller, MiddlewareFunction, HandlerFunction } from "./controller";
import type { HTTPMethods } from "src/types/http.types";
import type { Middlewares } from "src/middlewares";

export class Module {
  utils!: Utils;
  base!: string;
  controllers!: {[key: string]: Controller};
  midws!: Middlewares;

  constructor(base: string, utils: Utils, midws: Middlewares) {
    this.utils = utils;
    this.base = base;
    this.midws = midws;
    this.controllers = {};
  }

  appendHandler(
    app: Express,
    handlerName: string,
    hander: HandlerFunction | Array<MiddlewareFunction | HandlerFunction>
  ) {
    let [method, name] = handlerName.split("::") as [HTTPMethods, string];

    if(!this.utils.Http.isValidHTTPMethod(method) || !Boolean(app[method])) {
      console.log(`  Endpoint - ${name} - has invalid http method`);
      return;
    }

    let path = this.base + "/" + name;

    app[method](path, hander);
    console.log(`  Endpoint - ${path}, method: ${method} - Done`);
  }

  buildEndPoints(app: Express) {
    let controllerNames = Object.keys(this.controllers);
    console.log("In module: ExampleModule, endpoints are being built...");
    
    for(const controllerName of controllerNames) {
      console.log(`Status - ${controllerName} - Building...`);
      let handlerNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this.controllers[controllerName]));

      // "Without middlewares" handlers
      for(const handlerName of handlerNames) {
        if(
          // Isn't function or constructor
          typeof (this.controllers[controllerName] as any)[handlerName] !== "function"
          || handlerName === "constructor"
        ) continue;

        this.appendHandler(app, handlerName, (this.controllers[controllerName] as any)[handlerName]);
        delete (this.controllers[controllerName] as any)[handlerName];
      }

      // "With middlewares" handlers
      let withMiddlewaresEntries = this.controllers[controllerName].withMiddlewares.entries();
      
      for(const [handlerName, handler] of withMiddlewaresEntries) {
        this.appendHandler(app, handlerName, handler);
      }

      console.log(`Status - ${controllerName} - Done`);
    }
  }

  get [Symbol.toStringTag]() {
    return "Module";
  }
}