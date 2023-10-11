const Option = require('../models/options')
​
const getAllOptions = async (req,res) => {
    try {
        const Option = await Option.find()
        return res.json(options)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
​
const getOneOption = async (req,res) => {
    try {
        const id = req.params.id
        const Option = await Option.findById(id)
        if (Option) {
            return res.json(Make)
        }
        return res.status(404).send('Option with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}
​
module.exports = {
    getAllOptions,
    getOneOption
}