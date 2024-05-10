import express from 'express';
import path from 'path';
import users from './routes/users.js';
import logger from './middleware/logs.js';
import errorHandler from './middleware/errorHandler.js';
const app = express();
const port = process.env.PORT || 8080;


//middleware
app.use(express.json()); //parses json data
app.use(express.urlencoded({extended : false})); //parses url encoded forms.

//logger middleware
app.use(logger)

//static folders set up
//app.use(express.static(path.join(__dirname,"public")));

app.use('/api/users', users);

//errorHandlers
app.use(errorHandler)
//running my server
app.listen(port,() => console.log("Server up and running on port 8080..."));