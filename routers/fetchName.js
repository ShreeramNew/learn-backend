const express = require("express");
const router = express.Router();
const Names = require("../models/Name");

// Handles POST request for "http://localhost:3000/names"
router.post("/", async (req, res) => {
   const data = req.body;
   try {
      await Names.create({
         name: data.name,
         greeting: data.greeting,
      });
      res.send("Data is saved!");
   } catch (err) {
      res.send(err);
   }
});


// Handles GET request for "http://localhost:3000/names"
router.get("/", async (req, res) => {
   try {
      let names = await Names.find({});
      res.json(names);
   } catch (errors) {
      res.send(errors);
   }
});

module.exports = router;
