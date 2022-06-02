const { errorResponse, successResponse } = require("../../util/response.js");
const { ERROR_MESSAGE, HTTP_STATUS_CODE } = require("../../util/constants.js");
const  logger  = require("../../util/logger.js");
const validator = require("express-validator");
const { validationResult } = validator;
const { ethers,  Wallet, utils } = require('ethers');
const { resolve } = require("path");
const axios = require('axios').default;
require("dotenv").config();

const getInfo = async (req, res) => {
  try {
    console.log("dd",req.query.chain)
    let url = process.env.UNMARSHAL_BASE_URL +process.env.UNMARSHAL_API_VERSION + req.query.chain+'/address/0x9d7ec37fC01DC96948C731d45C4200833C1400B4/assets?auth_key='+process.env.UNMARSHAL_KEY;
    console.log(url)
    let resp = await axios.get(url);

    console.log("res : ", resp?.data)
    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse(" wallet details fetched sucessfuly", { res : resp?.data}));
  }
  catch (err) {
   console.log("Internal server error:", err?.response?.data);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVER, { data : err?.response?.data}));
  };
};

// export module
module.exports = {
  getInfo
};
