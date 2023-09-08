const http = require('http');

const fs = require('fs');
const responses = require('./responses');
const responses = require('/textResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    switch (request.url) {
        case '/':
            responses.getIndex(request, response);
            break;
        case '/page2':
            responses.getPage2(request, response);
            break;
        default:
            responses.getIndex(request, response);
            break;
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});