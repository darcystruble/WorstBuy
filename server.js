const express = require('express');
const db = require('./config');
const logger = require('morgan')
const bodyParser = require('body-paraser')
const cors = require('cors')

const makeController = require('./controllers/makeController')
const modelController = require('./controllers/modelController')
const optionsController = require('./controllers/optionsController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())


//cRud - Read
app.get('/models', modelController.getAllModels)
app.get('/models/:id', modelController.getOneModel)
app.get('/makes', makeController.getAllMakes)
app.get('/makes/:id', makeController.getOneMake)
app.get('/options', optionsController.getAllOptions)
app.get('/options/:id', optionsController.getOneOption)

//Crud - Create
// app.post('/models/', modelController.createModel)
// app.post('/make/', makeController.createMake)
// app.post('/options/', optionsController.createOptions)

//crUd - Update
// app.put('/models/:id', modelController.updateModel)
// app.put('/make/:id', makeController.updateMake)
// app.put('/options/:id', optionsController.updateOption)

//cruD - Delete
// app.delete('/models/:id', modelController.deleteModel)
// app.delete('/makes/:id', makeController.deleteMake)
// app.delete('/options/:id', optionsController.deleteOption)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))