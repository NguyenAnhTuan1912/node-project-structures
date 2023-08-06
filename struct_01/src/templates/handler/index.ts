import { Request, Response } from "express";
import Temp_ADB from "db/temp_a";

import utils from "utils";

type A = typeof utils;
interface Utils extends A {}
interface DBs {
  Temp_ADB: Temp_ADB
}

/**
 * __Template__
 * 
 * This template use to create API Handlers.
 * @param cb 
 * @returns 
 */
export function createHander(
  cb: (DBs: DBs, utils: Utils) => (req: Request, res: Response) => Promise<any>
) {
  const DBs = {
    Temp_ADB: new Temp_ADB()
  };

  return cb(DBs, utils);
}