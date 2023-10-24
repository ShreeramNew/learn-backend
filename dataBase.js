const mongoose=require('mongoose')
const connectionUri="mongodb://127.0.0.1:27017/userData"
const connectToMongo=async ()=>{
    await mongoose.connect(connectionUri);
    console.log("Connected Succefully");
}
module.exports=connectToMongo;