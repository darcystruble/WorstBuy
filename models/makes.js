const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const makesSchema = new Schema(
    {
        manufacturer: {type: String, required:true},
        logo: {type: String, required: true}      
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('Makes', makesSchema)