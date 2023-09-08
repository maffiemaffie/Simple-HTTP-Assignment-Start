const fs = require('fs');

const pleasekillme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const sendImage = (request, response, image) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

const pleasegodsaveme = (request, response) => sendImage(request, response, pleasekillme);

module.exports = {
  getImage: pleasegodsaveme,
};
