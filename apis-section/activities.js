
const express = require('express');

const app = express();

app.use(express());

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json,{});

const cors = require('cors');
app.use(cors());

app.use(express.static('apis-section'));

const port = 8000;

const server = app.listen(port, lisening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

