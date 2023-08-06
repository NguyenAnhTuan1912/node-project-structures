import { Response, Request } from "express";

interface ResponseMessage {
  isError: boolean,
  data?: any
  message?: string
}

const Utils = {
  RM: {
    /**
     * Use to create a response message objects.
     * @param isError Is error?
     * @param data Data of response message.
     * @param message Content of response message.
     * @returns 
     */
    getResponseMessage: function(isError = false, data: any, message: string) {
      return {
        isError,
        data,
        message
      }
    },
  
    /**
     * Use `res` (Express Response Object) to response to client.
     * @param res 
     * @param status 
     * @param responseMessage 
     * @returns 
     */
    responseJSON: function(res: Response, status: number, responseMessage: ResponseMessage) {
      return res.status(status).json(responseMessage);
    }
  },

  Other: {
    /**
     * Use to wait a action.
     * @param cb 
     * @param time 
     * @returns 
     */
    wait(cb: () => void, time = 1000) {
      return new Promise((r) => {
        setTimeout(() => {
          r(cb());
        }, time);
      });
    }
  }
};

export default Utils;