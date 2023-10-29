const express = require("express");
const router = express.Router();
const login = require("../models/Login");
const { validationResult, body } = require("express-validator");

//Checks if name is email or not and Bhrutya is in Uppercase
const ValidateInputs = [
   body("name").isEmail().withMessage("Name should be email"),
   body("Bhrutya").isUppercase().withMessage("Bhrutya value should be uppercase"),
];

//Handling POST request for "http://localhost:3000/jsr"
router.post("/", ValidateInputs, async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.send(errors); //Returns if Validation conditions are not satisified
   }
   const userData = req.body;
   try {
      await login.create({
         email: userData.name,
         password: userData.Bhrutya,
      });
      res.send("Bolo siya var Rama Chandra ji Ki...jai");
   } catch (err) {
      res.send(err);
   }
});

//Handling GET request for "http://localhost:3000/jsr"
router.get("/", async (req, res) => {
   try {
      let logins = await login.find({
         password: { $eq: "Jai Hanuman" },
      });

      logins = res.json(logins);
   } catch (err) {
      res.send(err);
   }
});

module.exports = router;
