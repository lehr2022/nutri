const mongoose=require('mongoose')
const Schema=mongoose.Schema

const citasSchema = new Schema({
    Fecha:{type: Date,Trim:true },
    Nombre: {type:String, Trim:true, lowercase:true},
    Apellidos: {type:String, Trim:true, lowercase:true},
    Email:{type:String, Trim:true,unique:true, lowercase:true},
    Phone: {type:Number},
    usuarios_ID:[{ type: Schema.Types.ObjectId, ref: "usuarios" }],
})

module.exports=mongoose.model('citas',citasSchema)