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
};

export default portfolioController;
