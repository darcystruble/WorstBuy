const Option = require('../models/options')
const mongoose = require('mongoose');

const getAllOptions = async (req,res) => {
    try {
        const options = await Option.find()
        return res.json(options)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneOption = async (req,res) => {
    try {
        const id = req.params.id
        let option = false
        if (mongoose.Types.ObjectId.isValid(id)) {
            option = await Option.findById(id)
        }
        if (option) {
            return res.json(option)
        }
        return res.status(404).send('Option with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllOptions,
    getOneOption
}