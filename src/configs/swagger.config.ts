const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const openapiSpecification = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ng Thanh Cong portfolio apis",
      version: "1.0.0",
    },
    basePath: "/",
  },
  apis: ["./src/api/v1/routers/*.ts"], // files containing annotations as above
});

const registerSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiSpecification, {})
  );
};

export default registerSwagger;
