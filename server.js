const express = require('express');
const db = require('./config');
const logger = require('morgan')

const makeController = require('./controllers/makeController')
const modelController = require('./controllers/modelController')
const optionsController = require('./controllers/optionsController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))


app.get('/', modelController.getAllModels)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))