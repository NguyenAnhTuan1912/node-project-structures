// const bodyParser = require("body-parser");
// const cors = require("cors");

// const Server = require("./classes/Server");
// const ServerBuilder = require("./classes/ServerBuilder");

// const PostRouter = require("./modules/post");
import bodyParser from "body-parser";
import cors from "cors";

import MyServer from "classes/MyServer";
import ServerBuilder from "classes/ServerBuilder";

import PostRouter from "modules/post";

const ExpressServer = new MyServer({ port: process.env.PORT || "3000" });
const builder = new ServerBuilder({ server: ExpressServer });

// Build something before start
// Build middle-wares
builder.buildMiddleWare(cors({ origin: "*" }));
builder.buildMiddleWare(bodyParser.json());
builder.buildMiddleWare(bodyParser.urlencoded({ extended: true }));

// Build API
// http://localhost:3000/api/post?id=post_01
// http://localhost:3000/api/posts
let base = "/api";
builder.buildAPI(base, PostRouter);

// Start new server.
ExpressServer.start();