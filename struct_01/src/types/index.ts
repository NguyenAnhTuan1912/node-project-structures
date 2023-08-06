import { Request, Response, NextFunction } from "express";
import MyServer from "classes/MyServer";

export type HTTPMethods = "get" | "post" | "put" | "delete" | "patch";

export interface ServerOptions {
  port: string
}

export interface ServerBuilderOptions {
  server: MyServer
}

export interface IMongoModel {
  validate: (data: any) => Promise<any>
}

export interface APIHandler {
  path: string,
  handler: (req: Request, res: Response, next?: NextFunction) => Promise<any>
}