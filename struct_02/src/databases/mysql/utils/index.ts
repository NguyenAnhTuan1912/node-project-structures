// Import types
import mysql from "mysql2";
import type { ConnectionOptions } from "mysql2";

export class MySQLUtils {
  constructor() {

  }

  getConnectionObj(domain: string, username: string, password: string, database: string) {
    return {
      host: domain,
      user: username,
      password,
      database
    } as ConnectionOptions
  }
}