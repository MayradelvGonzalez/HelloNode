const express = require('express');
const http = require("http");


const server = http.createServer((require, response) => {
    response.end("Hello World from the backend!");
})

server.listen(8080,()=>
console.log('Listening on PORT 8080')
)