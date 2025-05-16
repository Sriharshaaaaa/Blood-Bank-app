const express = require("express");
const { testController } = require("../controllers/testControllers");

//ruter object
const router = express.Router();

//routes
router.get("/", testController);

//export
module.exports = router;
