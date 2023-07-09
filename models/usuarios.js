const mongoose=require('mongoose')
const Schema=mongoose.Schema

const usuariosSchema = new Schema({
    Nombre: {type:String, Trim:true, lowercase:true},
    Apellidos: {type:String, Trim:true, lowercase:true},
    Cedula: {type:Number},
    Username: {type:String, Trim:true, lowercase:true},
    Email:{type:String, Trim:true,unique:true, lowercase:true},
    Phone: {type:Number},
    Password: {type:String, Trim:true, lowercase:true},
    Rol: {type:Number},
    Citas_ID:[{ type: Schema.Types.ObjectId, ref: "citas" }],
})

module.exports=mongoose.model('usuarios',usuariosSchema)