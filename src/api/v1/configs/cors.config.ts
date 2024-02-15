var cors = require("cors");

const registerCors = (app) => {
  app.use(cors());
};

export default registerCors;
