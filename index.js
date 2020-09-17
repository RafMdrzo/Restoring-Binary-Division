//placeholder file
const express = require('express');
const port = process.env.PORT || 8000;
const hbs = require('hbs');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");


app.use(express.static('public'));

app.get("/", function(req, res)
{
       res.render("home", {});
});


app.listen(port, function()
{
    console.log('listening at port ' + port);
});
