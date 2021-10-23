const dbConfig = require('./configs/database');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { MoodRepository } = require('./repository/mood.repository');
const socketIO = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

// var socket = socketIO.io()

const cors = require("cors");

const bodyParser = require('body-parser');
const route = require('./routers/index');
const { getgid } = require('process');
const port = 3000;


http.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    new MoodRepository().listenForEvents().subscribe(() => {
        new MoodRepository().retrieveMoodsAndChannel_token().then((value) => {
            socketIO.emit("songUpdate", value);
        })
    })
    socketIO.on("connection", (socket) => {
        socket.on('getSong', function() {
            new MoodRepository().retrieveMoodsAndChannel_token().then((value) => {
                console.log(value);
                socket.emit("songUpdate", value);
            })
        })
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

app.get("/channels", (req, res) => {
    new MoodRepository().retrieveMoods().then((value) => {
        res.send(value);
    })
})

