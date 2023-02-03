const PortalSchema = require("../models/signup_model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {use} = require("../router/getrouter");


const getUser = async (req, res) => {
    try {
    //   console.log(req.id);
      const id = mongoose.Types.ObjectId(req.id);
      let users = await PortalSchema.findOne(id).select("-password");
      res.json({
        message: "One the user",
        users,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };



// const getUsers = async (req, res) => {
//     try {
//       let users = await PortalSchema.find().select("-password");
//       res.json({
//         message: "all the users",
//         users,
//       });
//     } catch (err) {
//       res.json({message:"Error Users not available",
//          //message: err.message,
//       });
//     }
//   };


module.exports = 
    getUser
//     getUsers
//   };
  