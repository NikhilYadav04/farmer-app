import { Router } from "express";
import authenticateToken from "../middleware/tokenValidation.js";
import { add_product_cart, chang_count, get_products, remove_product } from "../controllers/cartController.js";
const cartRouter = Router();

//* add a product to the cart
cartRouter.post("/add-product", authenticateToken,add_product_cart);

//* increase counts of products in cart
cartRouter.post('/change-count',authenticateToken,chang_count);

//* remove product from a cart
cartRouter.delete('/remove-product',authenticateToken,remove_product);

//* fetch products of cart
cartRouter.get('/fetch-products',authenticateToken,get_products)

export default cartRouter;
