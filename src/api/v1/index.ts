import * as express from "express";
import { registerRoutes } from "./routers";
import { registerCors } from "./configs";

const app = express();
const port = 4001;

registerCors(app);
registerRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
