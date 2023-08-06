const express = require("express")
const ws = require("ws")
const cors = require("cors")
const { WebSocketServer } = require("ws")

const wss = new WebSocketServer({ port: 9000 });
const app = express()

// app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1> Hitting home </h1>")
})

app.listen(8080, (e) => {
    if (e) {
        console.log("server not started")
        return;
    }
    console.log("server has started @ 8080")

    wss.on('connection', function connection(ws) {
        ws.on('error', console.error);

        ws.on('message', function message(data) {
            console.log('received: %s', data);
        });

        ws.send('something');
    });
})



