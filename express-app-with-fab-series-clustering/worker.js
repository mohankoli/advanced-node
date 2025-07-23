const express = require("express");
const { fork } = require("child_process");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    const number = parseInt(req.query.number, 10);
    const child = fork(path.resolve(__dirname, "fibonacci-worker.js"));

    child.send({ number });

    child.on("message", (msg) => {
        res.send(`<h1>Fibonacci of ${number} is ${msg.result}</h1>`);
    });

    child.on("error", (err) => {
        res.status(500).send("Internal Error");
    });
});

app.listen(3000, () => {
    console.log(`Worker ${process.pid} started on port 3000`);
});
