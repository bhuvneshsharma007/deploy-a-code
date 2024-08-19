require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("bhuvneshsharma.com")
})


app.get('/Login',(req,res)=>{
    res.send("Hey MotherFucker you logggin sucessfully")
})

app.get('/SignUp',(req,res)=>{
    res.send("Hey MotherFucker you randi ka baccha phele login to kar")
})


app.get("/youtube",(req,res)=>{
    res.send("<h1>Hey this is the chai and code channel</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})