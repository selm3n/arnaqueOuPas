const express = require('express');
const bodyParser = require("body-parser");
const arnaques = require("./routes/api/arnaques");


const app = express();

app.use("/uploads", express.static(__dirname + "/uploads"));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use api Routes
arnaques.setup(app);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));



