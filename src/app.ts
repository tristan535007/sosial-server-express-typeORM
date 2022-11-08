import * as express from "express";
require("dotenv").config();
import { SERVER_PORT } from "./constants";
import { AppDataSource } from "./data-source";
import router from "./routes";

// create and setup express app
const app = express();
app.use(express.json());
app.use("/api", router);

const start = () => {
  //Run data source
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source started!");
    })
    .catch((e) => {
      console.error(e, "+");
    });

  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`);
  });
};

start();
