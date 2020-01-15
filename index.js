const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./routes/all');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(
	bodyParser.urlencoded({ extended: true })
);

route(app);

app.listen(port, function() {
	console.log("Server is running on port " + port)
	console.log("Connected")
});
