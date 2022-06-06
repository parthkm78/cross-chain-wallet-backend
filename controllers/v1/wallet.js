const { errorResponse, successResponse } = require("../../util/response.js");
const { ERROR_MESSAGE, HTTP_STATUS_CODE } = require("../../util/constants.js");
const  logger  = require("../../util/logger.js");
const validator = require("express-validator");
const { validationResult } = validator;
const { ethers,  Wallet, utils } = require('ethers');
const { resolve } = require("path");
const axios = require('axios').default;
require("dotenv").config();

const getTokenBalance = async (req, res) => {
  try {
    console.log("dd"+req.params.chain)
    let url = process.env.UNMARSHAL_BASE_URL +process.env.UNMARSHAL_API_VERSION + req.params.chain+'/address/'+req.params.address+'/assets?auth_key='+process.env.UNMARSHAL_KEY;
    console.log(url)
    let resp = await axios.get(url);

    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse("Wallet details fetched sucessfuly", { res : resp?.data}));
  }
  catch (err) {
   console.log("Internal server error:", err?.response?.data);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVER, { data : err?.response?.data}));
  };
};

const getNFTBalance = async (req, res) => {
  try {
    console.log("dd"+req.params.chain)
    let url = process.env.UNMARSHAL_BASE_URL +process.env.UNMARSHAL_API_VERSION + req.params.chain+'/address/'+req.params.address+'/nft-assets?auth_key='+process.env.UNMARSHAL_KEY;
    console.log(url)
    let resp = await axios.get(url);

    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse("Wallet details fetched sucessfuly", { res : resp?.data}));
  }
  catch (err) {
   console.log("Internal server error:", err?.response?.data);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVER, { data : err?.response?.data}));
  };
};

// export module
module.exports = {
  getTokenBalance,
  getNFTBalance
};
