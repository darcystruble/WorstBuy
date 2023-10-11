const Make = require('../models/makes')

const getAllMakes = async (req,res) => {
    try {
        const makes = await Make.find()
        return res.json(makes)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneMake = async (req,res) => {
    try {
        const id = req.params.id
        const makes = await Make.findById(id)
        if (makes) {
            return res.json(makes)
        }
        return res.status(404).send('Make with specified ID does not exist')
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message)
    }
}

async function deleteMake(req, res) {
    try {
        const id = req.params.id
        let make = await Make.findByIdAndDelete(id)
        if (make) {
            return res.status(200).json(make)
        }
        throw new Error("Make not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateMake(req, res) {
    try {
        const id = req.params.id
        let make = await Make.findByIdAndUpdate(id, req.body, { new: true })
        if (make) {
            return res.status(200).json(make)
        }
        throw new Error("Make not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createMake(req, res) {
    try {
        const make = await new Make(req.body)
        await make.save()
        return res.status(201).json()
                
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}


module.exports = {
    getAllMakes,
    getOneMake,
    createMake,
    updateMake,
    deleteMake
}
//