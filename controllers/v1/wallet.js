const { errorResponse, successResponse } = require("../../util/response.js");
const { ERROR_MESSAGE, HTTP_STATUS_CODE } = require("../../util/constants.js");
const  logger  = require("../../util/logger.js");
const validator = require("express-validator");
const { validationResult } = validator;
const { ethers,  Wallet, utils } = require('ethers');


const getInfo = async (req, res) => {
  try {
   
  
    
    res.status(HTTP_STATUS_CODE.OK)
      .json(successResponse(" wallet details fetched sucessfuly", { }));
  }
  catch (err) {
   console.log("Internal server error:", err);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER)
      .json(errorResponse(ERROR_MESSAGE.INTERNAL_SERVEvalidatorIdR_ERROR));
  };
};

// export module
module.exports = {
  getInfo
};
