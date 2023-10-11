const Model = require('../models/models')

const getAllModels = async (req,res) => {
    try {
        const models = await Model.find()
        return res.json(models)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneModel = async (req,res) => {
    try {
        const id = req.params.id
        const model = await Model.findById(id)
        if (model) {
            return res.json(model)
        }
        return res.status(404).send('Model with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}

async function deleteModel(req, res) {
    try {
        const id = req.params.id
        let model = await Make.findByIdAndDelete(id)
        if (model) {
            return res.status(200).json(model)
        }
        throw new Error("Model not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateModel(req, res) {
    try {
        const id = req.params.id
        let model = await Model.findByIdAndUpdate(id, req.body, { new: true })
        if (model) {
            return res.status(200).json(model)
        }
        throw new Error("Model not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createModel(req, res) {
    try {
        const model = await new Model(req.body)
        await model.save()
        return res.status(201).json({
            model
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getAllModels,
    getOneModel,
    createModel,
    updateModel,
    deleteModel
}