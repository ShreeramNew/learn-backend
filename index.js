const connectToMongo=require("./dataBase")
connectToMongo()
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use("/jsr",require('./Routers/Jsr'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})