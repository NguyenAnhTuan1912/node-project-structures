import { Router } from "express";

import MyServer from "./MyServer";

import { RouterManager, ServerBuilderOptions } from "types";

export default class ServerBuilder {
  server!: MyServer

  constructor(options: ServerBuilderOptions) {
    this.server = options.server;
  }

  /**
   * Use to build middleWares.
   * @param middleWare 
   */
  buildMiddleWare(middleWare: any) {
    this.server.middleWares.push(middleWare);
  }

  /**
   * Use to build API in router object.
   * @param {string} base 
   * @param {epxress.Router} router 
   */
  buildAPI(base: string, routerManager: RouterManager) {
    this.server.apis.push({ base, routerManager });
  }

  /**
   * Use to build db connections.
   * @param connection 
   */
  buildDBConnection(connection: Promise<boolean>) {
    this.server.dbConnections.push(connection);
  }
}