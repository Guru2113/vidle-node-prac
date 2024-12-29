const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const genres = require("./routes/genres");
const home = require("./routes/home");

//middleware
app.use(bodyparser.json()); //parse json in request body
//custom middleware for separate routespage
app.use('/api/genres',genres);
app.use('/api/home',home);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(process.env.PORT);
    console.log(`listening to ${port}`);
});
