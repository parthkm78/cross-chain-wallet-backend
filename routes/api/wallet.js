// **********************************************************************
// * Changelog										
// * All notable changes to this project will be documented in this file.	
// **********************************************************************
// *
// * Author				: Parth Mehta
// *
// * Date created		: 02/06/2022
// *
// * Purpose			: wallet APIs.
// *
// * Revision History	:
// *
// **********************************************************************

const router = require("express").Router();
const walletController = require("../../controllers/v1/wallet.js");
const { errorResponse, successResponse } = require("../../util/response.js");
const { ERROR_MESSAGE, HTTP_STATUS_CODE } = require("../../util/constants.js");

router.get("/info", walletController.getInfo);

module.exports = router;