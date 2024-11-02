import express from "express";
import { Router } from "express";
import { signinvalidation, signupValidation } from "../middleware/authValidation.js";
import { signin, signup } from "../controllers/authController.js";

//* initialize router
const authRouter = Router();

// * for signup
authRouter.post("/signup", signupValidation, signup);

//* for signin
authRouter.post("/signin",signinvalidation,signin);

export default authRouter;
