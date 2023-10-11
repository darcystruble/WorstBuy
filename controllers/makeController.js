const Make = require('../models/makes')

const getAllMakes = async (req,res) => {
    try {
        const Make = await Make.find()
        return res.json(makes)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneMake = async (req,res) => {
    try {
        const id = req.params.id
        const Make = await Make.findById(id)
        if (Make) {
            return res.json(Make)
        }
        return res.status(404).send('Make with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMakes,
    getOneMake
}
//