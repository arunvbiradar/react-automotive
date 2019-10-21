const express = require("express");
const router = express.Router();

const Model = require("../../models/CarModel");

// @route POST api/car-model
// @desc Create make
// @access private
router.get("/", (req, res) => {
  res.send("hi");
});
router.post("/", async (req, res) => {
  try {
    const newModel = {};
    for (let i in req.body) {
      newModel[i] = req.body[i];
    }
    // build make object
    const model = new CarModel(newModel);

    // Save user in db
    await model.save();

    res.json(model);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
