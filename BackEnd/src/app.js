
const express = require('express');
const app = express();
const aiRoutes=require('./routes/ai.routes')
const cors = require('cors');
require('dotenv').config();

const allowedOrigins = [
    process.env.REACT_APP_API_URL,      // From .env (e.g., Render frontend)
    'http://localhost:5173'             // For local development
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("running AI powered app")
});

  

app.use('/ai',aiRoutes)

module.exports=app;
