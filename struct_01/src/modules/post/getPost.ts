import Utils from "utils";

// console.log("Utils ~ modules/post/getPost.js ~ line:3: ", Utils);

const GetPost = {
  path: "",
  /**
   * Get A post with params:
   * - id: Id of post.
   */
  handler: Utils.Handler.create((db) => {
    return async function(req, res) {
      try {
        let query = req.query;
        let id = query.id;
  
        let result = await db.Post.find(id);
  
        return Utils.RM.responseJSON(
          res,
          200,
          Utils.RM.getResponseMessage(false, result, "Get post successfully.")
        );
      } catch (error: any) {
        return Utils.RM.responseJSON(
          res,
          500,
          Utils.RM.getResponseMessage(true, undefined, error.message)
        );
      }
    }
  })
};

export default GetPost;