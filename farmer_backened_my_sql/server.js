import Express, { urlencoded } from "express";
const app = Express();
import dotenv from "dotenv";
import router from "./route_config/index.js";
import authRouter from "./routes/auth.js";
import storeRouter from "./routes/store.js";
import queryRouter from "./routes/query.js";
import shopRouter from "./routes/shop.js";
import cartRouter from "./routes/cart.js";
import customerRouter from "./routes/customer.js";
import historyRouter from "./routes/orderHistory.js";
dotenv.config();

//* log for checking server
app.get("/", (req, res) => {
  res.send("Hello From Nikhil");
});

app.use(Express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

//* all routers inside project
app.use(router);
router.use("/auth",authRouter);
router.use("/store",storeRouter);
router.use("/query",queryRouter);
router.use("/shop",shopRouter);
router.use("/cart",cartRouter);
router.use("/customer",customerRouter);
router.use("/history",historyRouter);

//* start the node js server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is connected as ${PORT}`);
});
