const mongoose=require('mongoose')
const Schema=mongoose.Schema

const rolSchema = new Schema({
    Nombre: {type:String},
    
},{timestamps: true, versionKey:false,})

module.exports=mongoose.model('rol',rolSchema)