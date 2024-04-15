import { StringUtils } from "./string/string.utils";

export class Utils {
  String!: StringUtils;

  constructor() {
    this.String = new StringUtils();
  }
}