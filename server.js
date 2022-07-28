const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts)
app.set("views", path.join(__dirname, '/resources/views'))
app.set("view engine", 'ejs')
app.use(express.static(__dirname + '/public'))


require ('./routes/web')(app)


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})