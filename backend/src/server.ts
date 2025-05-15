import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connect, sql } from "./db/mssqlConfig";
import { Response, Request } from "express";

import vesselRoutes from "./routes/vesselRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

connect()
  .then((connection) => {
    console.log("Connected to the database.");
  })
  .catch((error) => {
    console.log("Database connection failed!");
    console.log(error);
  });

app.use("/api/vessels", vesselRoutes);

app.listen(3333, () => {
  console.log(`Example app listening on port ${3333}`);
});
