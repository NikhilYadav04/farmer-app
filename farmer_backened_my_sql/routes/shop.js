import { Router } from "express";
import authenticateToken from "../middleware/tokenValidation.js";
import { add_product, add_shop, delete_product, edit_product, edit_shop, get_products, get_shop } from "../controllers/shopController.js";
const shopRouter = Router();

//* create a shop account
shopRouter.post("/add-shop",authenticateToken,add_shop);

//* display a particular shop account
shopRouter.get("/get-shop",authenticateToken,get_shop)

//* edit shop details
shopRouter.put("/edit-shop",authenticateToken,edit_shop)

//* add a product in shop
shopRouter.post("/add-product",authenticateToken,add_product)

//* edit a product in shop
shopRouter.put("/edit-product",authenticateToken,edit_product)

//* delete a product
shopRouter.delete("/delete-product",authenticateToken,delete_product)

//* fetch all products for a particular shop
shopRouter.get("/get-products",authenticateToken,get_products)


export default shopRouter;