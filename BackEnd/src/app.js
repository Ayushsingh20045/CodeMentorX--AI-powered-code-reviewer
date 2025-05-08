
const express = require('express');
const app = express();
const aiRoutes=require('./routes/ai.routes')
const cors = require('cors');
require('dotenv').config();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("running AI powered app")
});

  

app.use('/ai',aiRoutes)

module.exports=app;
