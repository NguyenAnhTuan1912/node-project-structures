/**
 * Classes in this file are used for inheritance.
 */

import type { Databases } from "src/databases";
import type { Services } from "src/services";

export class Controller {
  db!: Databases;
  sv!: Services;

  constructor(db: Databases, sv: Services) {
    this.db = db;
    this.sv = sv;
  }

  get [Symbol.toStringTag]() {
    return "Controller";
  }
}