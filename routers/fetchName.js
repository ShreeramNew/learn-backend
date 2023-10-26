const express = require("express");
const router = express.Router();
const Names = require("../models/Name");

router.post("/",(req,res)=>{
    const data=req.body;
    Names.create({
        name:data.name,
        greeting:data.greeting
    })
    .then(()=>res.send("Data is saved!"))
    .catch(err=>res.send(err))
})
router.get("/", (req, res) => {
   Names.find({})
   .then((names)=>{
    res.json(names)
   })
   .catch(errors=>res.send(errors))
});

module.exports=router