const dbConfig = require('./configs/database');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

const cors = require("cors");

// const pg_client = new pg.Client(dbConfig.host +':'+ dbConfig.port);
// pg_client.connect();

const bodyParser = require('body-parser');
const route = require('./routers/index');
const { getgid } = require('process');
const port = 3000;


http.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    socketIO.on("connection", (socket) => {
        console.log('user connected!!');
        
        numberOfOnlineUsers++;
        socketIO.emit('onlineUsers', numberOfOnlineUsers);
    });

    

    socketIO.on("received", function (data)
    {
        console.log(data);
    });
});


var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use('/track', route);
let numberOfOnlineUsers = 0;

app.get("/", (req, res) => {
    res.json({message: "welcome watsa"});
});

