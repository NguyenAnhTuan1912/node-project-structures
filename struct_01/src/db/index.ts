import PostModel from "./post";

import Utils from "utils";

export default class DB {
  Post!: PostModel;

  constructor() {
    this.Post = new PostModel();
  }

  async connect() {
    Utils.Other.wait(() => { console.log("Connecting...") });
    Utils.Other.wait(() => { console.log("Database has been connected.") });
    return true;
  }
}