const express = require("express");

const dotenv = require("dotenv");

const cookieParser = require ("cookie-parser");

const rutas  = require('./routes/router');

const app = express();

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
//app.use(express.json);
//app.use(cookieParser)

dotenv.config({path:'./env/.env'})
/*
app.get('/',(req,res)=>{
    res.render('index');
})
*/


app.use('/',rutas)

app.listen(3000,(req,res)=>{
    console.log("server is running in port 3000")
})