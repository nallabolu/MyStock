// Sample App from Sai for Stocks App
const express=require('express');
const app=express();
const path=require('path');
const exphbs  = require('express-handlebars');
const PORT=process.env.PORT||5000;

const otherStuff="This is a New Stuff from Index.js";

//set handlebar middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set Handle Bar Routes
app.get('/', function (req, res) {
    res.render('home',{stuff:otherStuff});
});

//set static folder
app.use(express.static(path.join(__dirname,'public')));




app.listen(PORT,()=>console.log('Server Listening on PORT ' + PORT));