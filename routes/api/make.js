const express = require("express");
const router = express.Router();

const Make = require("./../../models/Make");

// @route POST api/makes
// @desc Create make
// @access private
router.post("/", [], async (req, res) => {
  try {
    // build make object
    const newMake = {};
    for (let i in req.body) {
      newMake[i] = req.body[i];
    }

    const make = new Make(newMake);
    // Save user in db
    await make.save();

    res.json(make);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const makes = await Make.find().sort({ name: 1 });
    res.json(makes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
