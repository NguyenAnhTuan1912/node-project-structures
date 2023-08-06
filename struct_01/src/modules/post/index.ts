import { createRouterManager } from "templates/router_manager";

// const GetPost = require("./getPost");
// const CreatePost = require("./createPost");
// const DeletePost = require("./deletePost");
// const UpdatePost = require("./updatePost");

// const GetPosts = require("./getPosts");
import GetPostHandler from "./handlers/getPostHandler";
import CreatePostHandler from "./handlers/createPostHandler";
import DeletePostHandler from "./handlers/deletePostHandler";
import UpdatePostHandler from "./handlers/updatePostHandler";
import GetPostsHandler from "./handlers/getPostsHandler";

const base = {
  post: "/post",
  posts: "/posts"
};

const PostRouter = createRouterManager({
  handlers: [
    // GET
    {
      path: base.post + GetPostHandler.path,
      method: "get",
      getHandler: GetPostHandler.getHandler
    },
    {
      path: base.posts + GetPostsHandler.path,
      method: "get",
      getHandler: GetPostsHandler.getHandler
    },
    // POST
    {
      path: base.post + GetPostsHandler.path,
      method: "post",
      getHandler: CreatePostHandler.getHandler
    },
    // DELETE
    {
      path: base.post,
      method: "delete",
      getHandler: DeletePostHandler.getHandler
    },
    // PUT
    {
      path: base.post,
      method: "put",
      getHandler: UpdatePostHandler.getHandler
    }
  ]
});

export default PostRouter;