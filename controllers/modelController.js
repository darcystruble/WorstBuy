const Model = require('../models/models')
​
const getAllModels = async (req,res) => {
    try {
        const Model = await Model.find()
        return res.json(models)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
​
const getOneModel = async (req,res) => {
    try {
        const id = req.params.id
        const Model = await Model.findById(id)
        if (Model) {
            return res.json(Model)
        }
        return res.status(404).send('Model with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}
​
module.exports = {
    getAllModels,
    getOneModel
}