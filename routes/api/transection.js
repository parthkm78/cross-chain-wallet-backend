// **********************************************************************
// * Changelog										
// * All notable changes to this project will be documented in this file.	
// **********************************************************************
// *
// * Author				: Parth Mehta
// *
// * Date created		: 03/06/2022
// *
// * Purpose			: wallet APIs.
// *
// * Revision History	:
// *
// **********************************************************************

const router = require("express").Router();
const transectionController = require("../../controllers/v1/transection");
const { errorResponse, successResponse } = require("../../util/response.js");
const { ERROR_MESSAGE, HTTP_STATUS_CODE } = require("../../util/constants.js");

router.get("/:chain/:address/list", transectionController.fetchTransectionList);
router.get("/:chain/token/:transactionHash", transectionController.fetchTokenTransectionDetail);
router.get("/:chain/nft/:transactionHash", transectionController.fetchNFTTransectionDetail);

module.exports = router;