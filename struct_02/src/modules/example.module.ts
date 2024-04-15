import { Module } from "src/classes/module";
import type { Databases } from "src/databases";
import type { Services } from "src/services";


import { ExampleController } from "src/controllers/example.controller";

export class ExampleModule extends Module {
  private __example: ExampleController;

  constructor(db: Databases, sv: Services) {
    super();
    this.__example = new ExampleController(db, sv);
  }

  getEndPoints() {
    
  }
}