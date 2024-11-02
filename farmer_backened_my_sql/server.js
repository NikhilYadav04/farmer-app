import Express, { urlencoded } from "express";
const app = Express();
import dotenv from "dotenv";
import router from "./route_config/index.js";
import authRouter from "./routes/auth.js";
import storeRouter from "./routes/store.js";
import queryRouter from "./routes/query.js";
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

//* start the node js server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is connected as ${PORT}`);
});
