import { createHandler } from "templates/handler";

// console.log("Utils ~ modules/post/getPost.js ~ line:3: ", Utils);

const GetPostHandler = createHandler(
  "",
  (dbs, utils) => {
    return async function(req, res) {
      try {
        let query = req.query;
        let id = query.id;

        let result = await dbs.Temp_ADB.Post.find(id);

        return utils.RM.responseJSON(
          res,
          200,
          utils.RM.getResponseMessage(false, result, "Get post successfully.")
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

export default GetPostHandler;