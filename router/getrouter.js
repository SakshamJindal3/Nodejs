const express = require("express");
const getUser=require("../controllers/getctrl");
//const authorization = require("../middleware/authoriztion");
const router = express.Router();
// router.get("/get", authorization, getUser);
// router.get("/all", authorization, getUsers);
router.get("/getuser",getUser);
// router.get("/all",getUsers);
module.exports = router;
