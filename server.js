require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const PORT = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts');
const mongoose = require ('mongoose');
const flash = require ('express-flash');
const MongoStore = require('connect-mongo')

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave:false,
    
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl:process.env.MONGO_URL,
    }),
    cookie:{maxAge:1000*60*60*24}
    
    }))


app.use(flash());

app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=>{
   
    res.locals.session = req.session
   
    next()
})


app.use(expressLayouts)
app.set("views", path.join(__dirname, '/resources/views'))
app.set("view engine", 'ejs')


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("DB Connected");
}).on('error',err=>{
    console.log("DB failed");
})



require ('./routes/web')(app)

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})