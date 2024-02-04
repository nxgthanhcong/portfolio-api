import * as express from "express";
import { portfolioController } from "../controller";
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

/**
 * @openapi
 * /api/v1/portfolio/get-current-job-infomation:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get(
  "/get-current-job-infomation",
  portfolioController.getCurrentJobInfomation
);

export default router;
