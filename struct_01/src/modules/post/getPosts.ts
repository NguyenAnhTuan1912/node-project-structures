import Utils from "utils";

const GetPosts = {
  path: "",
  /**
   * Get multiple posts with params:
   * - limit: Number of posts that want to take.
   * - skip: Number of posts that want to skip.
   * @param {express.Request} res 
   * @param {express.Response} req 
   */
  handler: Utils.Handler.create((db) => {
    return async function(req, res) {
    try {
      let query = req.query as { limit: string, skip: string };
      let limit = parseInt(query.limit);
      let skip = parseInt(query.skip);

      // console.log("Limit ~ file modules/post/getPosts.js ~ line:19: ", limit);
      // console.log("Skip ~ file modules/post/getPosts.js ~ line:20: ", skip);

      let result = await db.Post.findMultiple({ limit, skip });

      return Utils.RM.responseJSON(
        res,
        200,
        Utils.RM.getResponseMessage(false, result, "Get posts successfully.")
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

export default GetPosts;