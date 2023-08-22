const mongoose=require('mongoose')
const Schema=mongoose.Schema

const citasSchema = new Schema({
    Fecha:{type: Date,Trim:true },
    Cedula: {type:Number},
    Usuario:[{ type: Schema.Types.ObjectId, ref: "usuarios" }],
    
},{timestamps: true, versionKey:false,})

module.exports=mongoose.model('citas',citasSchema)