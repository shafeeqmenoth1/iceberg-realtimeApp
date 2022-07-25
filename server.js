const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts');

app.get('/',(req,res)=>{
    res.render('home')
})


app.use(expressLayouts)
app.set("views", path.join(__dirname, '/resources/views'))
app.set("view engine", 'ejs')

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})