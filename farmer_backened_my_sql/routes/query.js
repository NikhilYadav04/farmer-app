import { Router } from "express";
import authenticateToken from "../middleware/tokenValidation.js";
import {
    add_reply,
  delete_question,
  delete_reply,
  get_questions,
  get_replies,
  post_question,
} from "../controllers/queryController.js";
const queryRouter = Router();

//* post a question
queryRouter.post("/post-question", authenticateToken, post_question);

//* delete a question
queryRouter.delete("/delete-question/", authenticateToken, delete_question);

//* fetch all the question
queryRouter.get("/get-questions",authenticateToken,get_questions)

//* add a reply to question
queryRouter.post("/add-reply",authenticateToken,add_reply)

//* delete your reply to question
queryRouter.delete("/delete-reply",authenticateToken,delete_reply)

//* get all replies for a question
queryRouter.get("/get-replies",authenticateToken,get_replies)

export default queryRouter;
