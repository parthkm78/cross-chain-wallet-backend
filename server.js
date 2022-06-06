// **********************************************************************
// * Changelog
// * All notable changes to this project will be documented in this file.
// **********************************************************************
// *
// * Author				: Parth Mehta
// *
// * Date created		: 02/06/2022
// *
// * Purpose			: Contains all the initializations for routes, mongodb and server
// *
// * Revision History	:
// *
// * Date			Author			Jira			Functionality
// *
// **********************************************************************

const express = require("express");
const app = express();
require("./globals");
const cors = require("cors");
const admin = require("firebase-admin");
const https = require("https");
const http = require("http");
const fs = require("fs");
const helmet = require("helmet");
const logger = include("/util/logger");

require("dotenv").config();
app.use(cors());

// For parsing application/json
app.use(express.json({ limit: "30mb" }));

// Force all connections through https
app.use(helmet());

// ROUTES
const walletRouter = require("./routes/api/wallet.js");
app.use("/balance", walletRouter);

// ROUTES
const transectionRouter = require("./routes/api/transection.js");
app.use("/transection", transectionRouter);

// Start Server
const port = process.env.PORT || 5000;
http.createServer(null, app).listen(port, () => {
  logger.info("HTTP Server is running on port:" + port);
  // Initialize Server Issuer Agent
});
