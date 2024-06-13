import { Base } from "src/classes/Base";

import { MongoDatabase } from "./mongo";

// Import types
import type { Utils } from "src/utils";

export class Databases extends Base {
  mongo!: MongoDatabase;

  constructor() {
    super();
    this.mongo = new MongoDatabase();
  }

  async connect() {
    console.log("Mongo - status: connecting");
    await this.mongo.connect();
    console.log("Mongo - status: connected");

    console.log("MySQL - status: connecting");
    console.log("MySQL - status: connected");
  }
}