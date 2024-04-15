import http, { Server } from "http";
import express, { Express, Router } from "express";

type MyServerSettings = {
  port: string;
};

/**
 * Use this class to create an instance to manage server.
 */
export class MyServer {
  app!: Express;

  private __instance!: Server;
  private __settings!: MyServerSettings;
  
  constructor(settings: MyServerSettings) {
    this.app = express();
    this.__instance = http.createServer(this.app);
    this.__settings = settings;
  }

  /**
   * Use this method to setup a http server
   * @param fn 
   */
  async startup(fn: (port: string) => void) {
    this.__instance.listen(this.__settings.port, () => fn(this.__settings.port));
  }
}