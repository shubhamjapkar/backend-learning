const express = require("express");
const randomController = require("../controllers/randomController");

const router = express.Router();

router.get("/number", randomController.number);
router.get("/item", randomController.item);
router.get("/cat", randomController.cat);

module.exports = router;
