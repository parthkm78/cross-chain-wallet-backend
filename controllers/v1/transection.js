const { errorResponse, successResponse } = require("../../util/response.js");
const { ERROR_MESSAGE, HTTP_STATUS_CODE } = require("../../util/constants.js");
const  logger  = require("../../util/logger.js");
const validator = require("express-validator");
const { validationResult } = validator;
const { ethers,  Wallet, utils } = require('ethers');
const { resolve } = require("path");
const axios = require('axios').default;
require("dotenv").config();

const fetchTransectionList = async (req, res) => {
  try {
    let chain = req.params.chain;
    let address = req.params.address;
    page = req.query.page || 1;
    pageSize = req.query.pageSize || 10;
    let paramsUrl = "&page="+ page +"&pageSize=" + pageSize;
    let url = process.env.UNMARSHAL_BASE_URL +
              process.env.UNMARSHAL_API_VERSION + chain+'/address/'+address+
              "/transactions?auth_key="+process.env.UNMARSHAL_KEY+paramsUrl;

    let resp = await axios.get(url);
    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse("Transection list details fetched sucessfuly", { res : resp?.data}));
  }
  catch (err) {
   console.log("Internal server error:", err?.response?.data);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVER, { data : err?.response?.data}));
  };
};

const fetchTokenTransectionDetail = async (req, res) => {
  try {
    let chain = req.params.chain;
    let transactionHash = req.params.transactionHash;
   
    let url = process.env.UNMARSHAL_BASE_URL +
              process.env.UNMARSHAL_API_VERSION + chain+'/transactions/'+transactionHash+
              "?auth_key="+process.env.UNMARSHAL_KEY;

    console.log("Url:"+ url)
    let resp = await axios.get(url);
    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse("Transection details fetched sucessfully", { res : resp?.data}));
  }
  catch (err) {
   console.log("Internal server error:", err?.response?.data);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVER, { data : err?.response?.data}));
  };
};

const fetchNFTTransectionDetail = async (req, res) => {
  try {
    let chain = req.params.chain;
    let transactionHash = req.params.transactionHash;
   
    let url = process.env.UNMARSHAL_BASE_URL +
              process.env.UNMARSHAL_API_VERSION + chain+'/transactions/'+transactionHash+
              "?auth_key="+process.env.UNMARSHAL_KEY;

    console.log("Url:"+ url)
    let resp = await axios.get(url);
    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse("Transection details fetched sucessfully", { res : resp?.data}));
  }
  catch (err) {
   console.log("Internal server error:", err?.response?.data);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVER, { data : err?.response?.data}));
  };
};

// export module
module.exports = {
  fetchTransectionList,
  fetchTokenTransectionDetail,
  fetchNFTTransectionDetail
};
