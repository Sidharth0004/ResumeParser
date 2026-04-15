const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");

const { matchResume } = require("../controllers/matchController");

router.post("/", upload.single("resume"), matchResume);

module.exports = router;