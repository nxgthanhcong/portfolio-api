import * as express from "express";
import { registerRoutes } from "./routers";
import { registerCors, registerSwagger } from "../../../src/configs";

const app = express();
const port = 3001;

registerCors(app);
registerRoutes(app);
registerSwagger(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
