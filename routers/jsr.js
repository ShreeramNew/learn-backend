const express = require("express");
const router = express.Router();
const login = require("../models/Login");
const { validationResult, body } = require("express-validator");

const ValidateInputs = [
   body("name").isEmail().withMessage("Name should be email"),
   body("Bhrutya").isUppercase().withMessage("Bhrutya value should be uppercase"),
];

//Handling POST request
router.post("/", ValidateInputs, (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.send(errors);
   }
   const userData = req.body;
   login
      .create({
         email: userData.name,
         password: userData.Bhrutya,
      })
      .then(() => {
         res.send("Bolo siya var Rama Chandra ji Ki...jai");
      })
      .catch((err) => res.send(err));
});

//Handling GET request
router.get("/", (req, res) => {
   login
      .find({
       password: { $eq: "Jai Hanuman" } 
      })
      .then((logins) => {
         res.json(logins);
         console.log(typeof(logins));
      })
      .catch((err) => res.send(err));
});

module.exports = router;
