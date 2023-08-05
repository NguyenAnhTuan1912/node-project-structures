import Utils from "utils";

const UpdatePost = {
  path: "",
  handler: Utils.Handler.create((db) => {
    return async function(req, res) {
      try {
        let query = req.query;
        let id = query.id;

        console.log("Req's Body ~ file updatePost.js ~ line:11: ", req.body);
        console.log("Req's Query ~ file updatePost.js ~ line:12: ", query);
  
        let result = await db.Post.find(id);
  
        return Utils.RM.responseJSON(
          res,
          200,
          Utils.RM.getResponseMessage(false, result, "Update post successfully.")
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

export default UpdatePost;