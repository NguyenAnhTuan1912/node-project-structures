import type { MyServer } from "./MyServer";
import type { Module } from "./module";
import type { Databases } from "src/databases";

export class ServerBuilder {
  private __isModulesBuilt!: boolean;
  private __isMiddlewaresBuilt!: boolean;
  private __isDatabasesBuilt!: boolean;
  private __server!: MyServer;

  constructor(server: MyServer) {
    this.__server = server;
    this.__isModulesBuilt = true;
    this.__isMiddlewaresBuilt = true;
    this.__isDatabasesBuilt = true;
  }

  /**
   * This function let
   * @returns 
   */
  canStartup() {
    return this.__isDatabasesBuilt && this.__isMiddlewaresBuilt && this.__isModulesBuilt;
  }

  async buildModules(modules: Array<Module>) {
    this.__isModulesBuilt = true;
  }

  async buildMiddlewares(middleWares: []) {
    this.__isMiddlewaresBuilt = true;
  }

  async buildDatabases(databases: Databases) {
    await databases.connect();
    this.__isDatabasesBuilt = true;
  }
}