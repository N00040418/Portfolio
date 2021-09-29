require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/router');
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/misc', express.static(__dirname + 'public/misc'));
app.use('', router);

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log('App is listening on http://localhost:' + port);
    console.log('Pres CNTRL + C to quit.');
});

module.exports = app;