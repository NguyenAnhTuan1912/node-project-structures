import MyServer from "classes/MyServer"

export type HTTPMethods = "get" | "post" | "put" | "delete" | "patch";

export interface ServerOptions {
  port: string
}

export interface ServerBuilderOptions {
  server: MyServer
}