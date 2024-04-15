import { Model } from "src/classes/database";

// Import types
import type { IModel } from "src/types/databases.types";
import type { ExampleModelData } from "../index.types";

export class ExampleModel extends Model implements IModel<ExampleModelData> {
  constructor() {
    super();
  }
}