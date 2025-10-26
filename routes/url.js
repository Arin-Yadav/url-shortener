const express = require("express");
const {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleDeleteUsers,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleRedirectURL);

router.get("/analytics/:shortId", handleGetAnalytics);

router.delete("/user/:id", handleDeleteUsers);

module.exports = router;