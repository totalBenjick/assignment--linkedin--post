/* Import the modules. */
const express = require('express');
const http = require('http');
const fs = require('fs');
const chalk = require('chalk');
const morgan = require('morgan');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const indexFile = `${ __dirname }/index.html`;
const api = require('./src/routes/api');
/*app.set('json spaces', 2);
*/
//Parse  body request
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

//ENABLING CORS
app.use( (reques,response,next) => {
  response.header('Access-Control-Allow-Origin','*');
  response.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With,Content-Type,Accept,Autorization'
    );
   
  next();
});
app.options('*', (request,respond,next) =>{
  response.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE'
    );
    response.send(200);
  
  next();
});


//Route
app.get('/', (request, response) => {
  response.sendFile(indexFile)
});

app.use('/api/v1/', api);  
/*con que ENDPOINT SE EJECTUA ESTO DE ARRIBA*/

app.use((request, response) => {
  const ERROR ={
    message : '404. Not Found.'
  };

  response
    .status(404)
    .json(ERROR);

});

app.use((request,response) => {
  const ERROR = {
    message: '500.  Server not online'
  };

  response
    .status(500)
    .json(ERROR);

});


var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/**
 * Run and listen the server on an specific port.
 */
app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Node server running on PORT: ${PORT}`);

  console.log(formatedMessage);
});
