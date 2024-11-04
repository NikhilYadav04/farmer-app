import { Router } from "express";
import authenticateToken from "../middleware/tokenValidation.js";
import { search_product, search_product_location } from "../controllers/customerController.js";
const customerRouter = Router();

//* search for particular product near his location
customerRouter.post("/search-products-location",authenticateToken,search_product_location);

//*search for product globally
customerRouter.post("/search-products",authenticateToken,search_product);

export default customerRouter;