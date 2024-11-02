import { Router } from "express";
import authenticateToken from "../middleware/tokenValidation.js";
import { get_responses, upload_response } from "../controllers/storeController.js";
import upload from "../services/cloudinary_config.js";
const storeRouter = Router();

//* store the response
storeRouter.post("/upload",authenticateToken,upload.single("image"),upload_response)

//* get the responses
storeRouter.get("/get",authenticateToken,get_responses)

export default storeRouter;