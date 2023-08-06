import { createRouter } from "templates/router";

// const GetPost = require("./getPost");
// const CreatePost = require("./createPost");
// const DeletePost = require("./deletePost");
// const UpdatePost = require("./updatePost");

// const GetPosts = require("./getPosts");
import GetPost from "./handlers/getPost";
import CreatePost from "./handlers/createPost";
import DeletePost from "./handlers/deletePost";
import UpdatePost from "./handlers/updatePost";
import GetPosts from "./handlers/getPosts";

const base = {
  post: "/post",
  posts: "/posts"
};

const PostRouter = createRouter({
  handlers: [
    // GET
    {
      path: base.post + GetPost.path,
      method: "get",
      fns: [GetPost.handler]
    },
    {
      path: base.posts + GetPosts.path,
      method: "get",
      fns: [GetPosts.handler]
    },
    // POST
    {
      path: base.post + GetPosts.path,
      method: "post",
      fns: [CreatePost.handler]
    },
    // DELETE
    {
      path: base.post,
      method: "delete",
      fns: [DeletePost.handler]
    },
    // PUT
    {
      path: base.post,
      method: "put",
      fns: [UpdatePost.handler]
    }
  ]
});

export default PostRouter;