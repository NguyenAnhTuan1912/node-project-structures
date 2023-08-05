import { Router } from "express";

// const GetPost = require("./getPost");
// const CreatePost = require("./createPost");
// const DeletePost = require("./deletePost");
// const UpdatePost = require("./updatePost");

// const GetPosts = require("./getPosts");
import GetPost from "./getPost";
import CreatePost from "./createPost";
import DeletePost from "./deletePost";
import UpdatePost from "./updatePost";
import GetPosts from "./getPosts";

const PostRouter = Router();


const base = {
  post: "/post",
  posts: "/posts"
};

// GET
PostRouter.route(base.post + GetPost.path).get(GetPost.handler);
PostRouter.route(base.posts + GetPosts.path).get(GetPosts.handler);

// POST
PostRouter.route(base.post).post(CreatePost.handler);

// DELETE
PostRouter.route(base.post).delete(DeletePost.handler);

// PUT
PostRouter.route(base.post).put(UpdatePost.handler);

export default PostRouter;