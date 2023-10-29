const connectToMongo=require("./dataBase")
connectToMongo()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use("/SignUp",require('./routers/signUpHandler'));
app.use("/names",require('./routers/fetchName'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})