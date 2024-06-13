import mysql from "mysql2";

// Import classes
import { Database } from "../../classes/Database";

// Import utils
import { MySQLUtils } from "./utils";

// Import settings
import { AppSettings } from "src/settings";

const __settings = AppSettings.MYSQL;

export type MySQL_Instances = {
  [K in keyof typeof __settings]: mysql.Connection;
}

export type MySQL_DBInformations = {
  [K in keyof typeof __settings.SIMPLE_API.DB]: typeof __settings.SIMPLE_API.DB[K];
}

export class MySQLDatabase extends Database<MySQL_Instances, MySQLUtils> {
  constructor() {
    super(new MySQLUtils());
    
    let clusterNames = Object.keys(__settings);
    let poolCluster = mysql.createPoolCluster();

    for(let clusterName of clusterNames) {
      poolCluster.add(
        clusterName,
        this.localUtils.getConnectionObj(
          __settings[clusterName as keyof typeof __settings].DOMAIN!,
          __settings[clusterName as keyof typeof __settings].USERNAME!,
          __settings[clusterName as keyof typeof __settings].PASSWORD!,
          __settings[clusterName as keyof typeof __settings].DB.NAME
        )!
      );
    }
  }

  async connect() {
    try {
      let dbNames = Object.keys(this.instances);

      for(let dbName of dbNames) {
        console.log(`  ${dbName} DB - status: connecting`);
        await this.instances[dbName as keyof typeof this.instances].promise().connect();
        console.log(`  ${dbName} DB - status: connected`);
      }

    } catch (error: any) {
      console.error(error.message);
    }
  }
}