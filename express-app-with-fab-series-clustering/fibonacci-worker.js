const fabObj = require("./math-logic/fibonacci-series");

process.on("message", (msg) => {
    const result = fabObj.calculateFibonacciValue(msg.number);
    process.send({ result });
});
