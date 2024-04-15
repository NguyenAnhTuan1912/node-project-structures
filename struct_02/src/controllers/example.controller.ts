import type { Request, Response } from "express";

import { Controller } from "../classes/controller";

export class ExampleController extends Controller {
  constructor(db: any, sv: any) {
    super(db, sv);
  }

  async getExamples(req: Request, res: Response) {
    return new Promise((resolve) => { resolve("Done") });
  }
}