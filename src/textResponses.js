const getMessage = (request, response, message) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('hello world');
    response.end();
};

const hello = 'Hello World';

const getTimeString = () => {
    const d = new Date();
    const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return dateString;
};

const getHello = (request, response) => getMessage(request, response, hello);

const getTime = (request, response) => getMessage(request, response, getTimeString());

module.exports = {
    hello,
    getTimeString,
    getHello,
    getTime,
}