import { Request, Response } from "express";
import Temp_ADB from "db/temp_a";

import utils from "utils";
import { APIHandler } from "types";

// Internal Types
type A = typeof utils;
interface Utils extends A {}
interface DBs {
  Temp_ADB: Temp_ADB
}

type CreateHandlerCallBack = (DBs: DBs, utils: Utils) => (req: Request, res: Response) => Promise<any>

/**
 * __Template__
 * 
 * This template use to create API Handlers.
 * @param cb 
 * @returns 
 */
export function createHandler(
  path: string,
  cb: (DBs: DBs, utils: Utils) => (req: Request, res: Response) => Promise<any>
): APIHandler {
  const DBs = {
    Temp_ADB: new Temp_ADB()
  };

  return {
    path,
    handler: cb(DBs, utils)
  }
}