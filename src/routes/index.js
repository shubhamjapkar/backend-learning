const express = require("express");
const itemRoutes = require("./itemRoutes");
const randomRoutes = require("./randomRoutes");
const user = require("../models/user.model")

const router = express.Router();

router.post("/test", (req, res) => {
  const { title, description } = req.query;

  user.create({
    title: title,
    description: description
  }).then(r => console.log("created"))

  res.status(200).json({ status: "Done" });
});

router.get("/health", (req, res) => {

  const { name } = req.query;

  res.status(200).json({ name: name });
});

router.use("/items", itemRoutes);
router.use("/random", randomRoutes);

module.exports = router;
