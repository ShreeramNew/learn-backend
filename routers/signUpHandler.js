const express = require("express");
const router = express.Router();
const SignUp = require("../models/SignUp");
const { validationResult, body } = require("express-validator");

//Checks if name is email or not
const ValidateInputs = [body("email").isEmail().withMessage("Not a Valid email")];

//Handling POST request for "http://localhost:3000/SignUp"
router.post("/", ValidateInputs, async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).send(errors); //Return if Validation conditions are not satisified
   }
   const userData = req.body;
   try {
      //Check if email is already registered
      let isPresent = await SignUp.findOne({ email: { $eq: userData.email } });
      if (!isPresent) {
         await SignUp.create({
            email: userData.email,
            password: userData.password,
         });
         res.status(201).json({
            response: "Account Created!",
         });
      } else {
         res.status(403).json({
            response: "Account exists already!",
         });
      }
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router;
