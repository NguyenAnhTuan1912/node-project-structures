import { createHandler } from "templates/handler";

const DeletePostHandler = createHandler(
  "",
  (dbs, utils) => {
    return async function(req, res) {
      try {
        let query = req.query;
        let id = query.id;

        console.log("Req's Body ~ file deletePost.js ~ line:11: ", req.body);
        console.log("Req's Query ~ file deletePost.js ~ line:12: ", query);

        let result = await dbs.Temp_ADB.Post.find(id);

        return utils.RM.responseJSON(
          res,
          200,
          utils.RM.getResponseMessage(false, result, "Delete post successfully.")
        );
      } catch (error: any) {
        return utils.RM.responseJSON(
          res,
          500,
          utils.RM.getResponseMessage(true, undefined, error.message)
        );
      }
    }
  }
);

export default DeletePostHandler;