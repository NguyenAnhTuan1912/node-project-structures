import { Base } from "src/classes/Base";

import { MongoDatabase } from "./mongo";
import { MySQLDatabase } from "./mysql";

export class Databases extends Base {
  mongo!: MongoDatabase;
  mysql!: MySQLDatabase;

  constructor() {
    super();
    this.mongo = new MongoDatabase();
    this.mysql = new MySQLDatabase();
  }

  async connect() {
    console.log("Mongo - status: connecting");
    await this.mongo.connect();
    console.log("Mongo - status: connected");

    console.log("MySQL - status: connecting");
    await this.mysql.connect();
    console.log("MySQL - status: connected");
  }
}