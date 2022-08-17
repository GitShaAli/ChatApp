const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const loginPage = require(`./routes/login`);
const msgRoute = require(`./routes/messages`);
const showRoute = require(`./routes/display`)
app.use(bodyParser.urlencoded({extended: false}))

app.use(loginPage);
app.use(msgRoute);
app.use(showRoute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(7000);