const express = require("express");
const router = express.Router();
const { handleProxyRequest } = require("../services/proxyService");

router.post("/", handleProxyRequest);

module.exports = router;
