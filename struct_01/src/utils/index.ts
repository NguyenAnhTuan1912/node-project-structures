import { Response, Request } from "express";

import DB from "db";

interface ResponseMessage {
  isError: boolean,
  data?: any
  message?: string
}

export default class Utils {
  static RM = {
    getResponseMessage: function(isError = false, data: any, message: string) {
      return {
        isError,
        data,
        message
      }
    },
  
    responseJSON: function(res: Response, status: number, responseMessage: ResponseMessage) {
      return res.status(status).json(responseMessage);
    }
  }

  static Other = {
    wait(cb: () => void, time = 1000) {
      return new Promise((r) => {
        setTimeout(() => {
          r(cb());
        }, time);
      });
    }
  }

  static Handler = {
    /**
     * Use to create a handler.
     * @param cb 
     */
    create(cb: (db: DB) => (req: Request, res: Response) => Promise<any>) {
      const db = new DB();
      return cb(db);
    }
  }
}