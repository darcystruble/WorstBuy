const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const modelsSchema = new Schema(
    {        
        make: {type: Schema.Types.ObjectId, ref: 'Makes'},
        image_of_car: {type: String, required: true},
        year: {type: Number, required: true},
        name: {type: String, required: true},
        mileage: {type: Number, required: true},
        price: {type: Number, required: true},
        transmission: {type: String, required: true},
        drivetrain: {type: String, required: true},
        fuel_type: {type: String, required: true},
        trim: {type: String, required: true},
        color: {type: String, required: true},
        options: {type: Schema.Types.ObjectId, ref: 'Options'}        
    },
    {timestamps: true}
)

module.exports = mongoose.model('Model', modelsSchema)