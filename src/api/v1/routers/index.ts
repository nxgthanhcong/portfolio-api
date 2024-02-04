import portfolioRouter from "./portfolio.router";

const apiVer = "v1";

const registerRoutes = (app) => {
  app.use(`/api/${apiVer}/portfolio`, portfolioRouter);
};

export { registerRoutes };
