import { createHandler } from "templates/handler";

const CreatePostHandler = createHandler(
  "",
  (dbs, utils) => {
    return async function(req, res) {
      try {
        let body = req.body;
        let data = {
          name: body.name,
          author: body.author,
          type: body.type,
          date: (new Date(body.date)).getTime()
        }
        
        return utils.RM.responseJSON(
          res,
          200,
          utils.RM.getResponseMessage(false, data, "Create post successfully.")
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

export default CreatePostHandler;