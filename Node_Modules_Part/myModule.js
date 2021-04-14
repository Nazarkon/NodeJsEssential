const { OutgoingMessage } = require("http");
const { compileFunction } = require("vm");

let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = "Alex";

module.exports = {
    inc,
    dec,
    getCount,
}