import { Router } from "express";

import MyServer from "./MyServer";

import { ServerBuilderOptions } from "types";

export default class ServerBuilder {
  server!: MyServer

  constructor(options: ServerBuilderOptions) {
    this.server = options.server;
  }

  buildMiddleWare(middleWare: any) {
    this.server.middleWares.push(middleWare);
  }

  /**
   * 
   * @param {string} base 
   * @param {epxress.Router} router 
   */
  buildAPI(base: string, router: Router) {
    this.server.apis.push({ base, router });
  }
}