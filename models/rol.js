const mongoose=require('mongoose')
const Schema=mongoose.Schema

const rolSchema = new Schema({
    Nombre: {type:String},
    
})

module.exports=mongoose.model('rol',rolSchema)