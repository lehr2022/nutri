const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bcrypt=require('bcrypt')
//import bcrypt from 'bcryptjs'

const usuariosSchema = new Schema({
    Name: {type:String, Trim:true, lowercase:true},
    Surname: {type:String, Trim:true, lowercase:true},
    Cedula: {type:Number},
    Username: {type:String, Trim:true, lowercase:true},
    Email:{type:String, Trim:true, lowercase:true},
    Phone: {type:Number},
    Password: {type:String},
    Rol: [{ref:"rol", type: Schema.Types.ObjectId}],
    Citas:[{ type: Schema.Types.ObjectId, ref: "citas" }],
    Historia:[{ref:"historias", type: Schema.Types.ObjectId}],
},{timestamps: true, versionKey:false,}

)

usuariosSchema.statics.encryptPassword = async(password) =>{
   const salt = await bcrypt.genSalt(10)
   return await bcrypt.hash(password,salt)
}
usuariosSchema.statics.comparePassword = async(password, receivedPassword) =>{
    return await bcrypt.compare(password, receivedPassword)
}


module.exports=mongoose.model('usuarios',usuariosSchema)