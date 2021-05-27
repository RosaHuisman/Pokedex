
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');


const router = require('./app/router');
app.use(router);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});