import { portfolioBusiness } from "../business";

const portfolioController = {
  getCurrentJobInfomation(req, res) {
    try {
      res.json({
        isSucceed: true,
        data: portfolioBusiness.getCurrentJobInfomation(),
        moreInfor: null,
        message: null,
      });
    } catch (ex) {
      //TODO: handle log error
      res.json({
        isSucceed: false,
        data: null,
        moreInfor: "nxgthanhcong",
        message: "some thing went wrong!",
      });
    }
  },
  getAboutInfomation(req, res) {
    try {
      res.json({
        isSucceed: true,
        data: portfolioBusiness.getAboutInfomation(),
        moreInfor: null,
        message: null,
      });
    } catch (ex) {
      //TODO: handle log error
      res.json({
        isSucceed: false,
        data: null,
        moreInfor: "nxgthanhcong",
        message: "some thing went wrong!",
      });
    }
  },
  getExperiences(req, res) {
    try {
      res.json({
        isSucceed: true,
        data: portfolioBusiness.getExperiences(),
        moreInfor: null,
        message: null,
      });
    } catch (ex) {
      //TODO: handle log error
      res.json({
        isSucceed: false,
        data: null,
        moreInfor: "nxgthanhcong",
        message: "some thing went wrong!",
      });
    }
  },
  getProjects(req, res) {
    const { page, limit } = req.query;
    try {
      res.json({
        isSucceed: true,
        data: portfolioBusiness.getProjects(page, limit),
        moreInfor: null,
        message: null,
      });
    } catch (ex) {
      //TODO: handle log error
      res.json({
        isSucceed: false,
        data: null,
        moreInfor: "nxgthanhcong",
        message: "some thing went wrong!",
      });
    }
  },
  getBlogs(req, res) {
    const { page, limit } = req.query;

    try {
      res.json({
        isSucceed: true,
        data: portfolioBusiness.getBlogs(page, limit),
        moreInfor: null,
        message: null,
      });
    } catch (ex) {
      //TODO: handle log error
      res.json({
        isSucceed: false,
        data: null,
        moreInfor: "nxgthanhcong",
        message: "some thing went wrong!",
      });
    }
  },
};

export default portfolioController;
