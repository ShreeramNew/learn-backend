const moongoose = require("mongoose");
const saveName = new moongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   greeting: {
      type: String,
   },
});
module.exports = moongoose.model("Name", saveName);
