const mongoose=require('mongoose')
const Schema=mongoose.Schema


const rolSchema = new Schema({
    name: {String},
    },{versionKey:false, timestamps: true})

module.exports=mongoose.model('rol',rolSchema)