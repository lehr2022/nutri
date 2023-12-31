const mongoose=require('mongoose')
const Schema=mongoose.Schema

const historiasSchema = new Schema({
    
    Cedula: {type:Number},
    Edad: {type:Number},
    Etnia: {type:String, Trim:true, lowercase:true},
    Altura: {type:Number},
    Peso: {type:Number},
    Comoborbilidad: {type:String, Trim:true, lowercase:true},
    Alergias: {type:String, Trim:true, lowercase:true},
    Alcohol: {type:String, Trim:true, lowercase:true},
    Tabaquismo: {type:String, Trim:true, lowercase:true},
    Drogas: {type:String, Trim:true, lowercase:true},
    Medicamentos: {type:String, Trim:true, lowercase:true},
    Usuario:[{ type: Schema.Types.ObjectId, ref: "usuarios" }],
    
},{timestamps: true, versionKey:false,})

module.exports=mongoose.model('historias',historiasSchema)