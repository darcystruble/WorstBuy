const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const optionsSchema = new Schema(
    {        
        name:{type: String, required: true},
        heated_seats: {type: Boolean, required: true},
        bluetooth: {type: Boolean, required: true},
        navigation: {type: Boolean, required: true},
        remote_start: {type: Boolean, required: true},
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('Options', optionsSchema)