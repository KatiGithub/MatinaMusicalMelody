const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const route = require('./routers/index');

const port = 3000;

var corsOptions = {
    // origin: "http://localhost:4200"
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/track', route);

app.get("/", (req, res) => {
    res.json({message: "welcome watsa"});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
