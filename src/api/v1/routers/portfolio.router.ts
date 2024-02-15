import * as express from "express";
import { portfolioController } from "../controller";
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get(
  "/get-current-job-infomation",
  portfolioController.getCurrentJobInfomation
);

router.get("/get-about-infomation", portfolioController.getAboutInfomation);

router.get("/get-experiences", portfolioController.getExperiences);

router.get("/get-projects", portfolioController.getProjects);

router.get("/get-blogs", portfolioController.getBlogs);

export default router;
