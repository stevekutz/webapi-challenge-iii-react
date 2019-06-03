// code away! 
// IMPORTS server.js
const server = require('./server.js');
const port = 4010;  



server.listen(port, () => {
    console.log(`\n Server running on http://localhost:${port} \n`);
  });
