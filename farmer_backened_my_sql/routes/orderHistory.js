import { Router } from "express";
import authenticateToken from "../middleware/tokenValidation";
import { create_history } from "../controllers/orderHistoryController";
const historyRouter = Router();

//* create order history
historyRouter.post("/create-history",authenticateToken,create_history);

//* get full order history
historyRouter.get("/get-history",authenticateToken,get_history);

//* delete product from history list
historyRouter.post("/delete-product",authenticateToken,delete_product);

export default historyRouter;