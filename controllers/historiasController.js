
const historias = require('../models/historias')
const usuarios = require('../models/usuarios')


///primera accion listar todos
exports.list=async(req,res)=>{

    try{
    const colHistorias=await historias.find({})
    res.json(colHistorias)
}catch(error){
    console.log(error)
    res.send(error)
    next()
}
}


///segunda accion ingresar todos
exports.add=async(req,res)=>{

    const {cedula, edad, etnia, altura, peso, comoborbilidad, alergias, alcohol, tabaquismo, drogas, medicamentos, usuario} = req.body;

    const historia=new historias({
        Cedula: req.body.Cedula,
        Edad: req.body.Edad,
        Etnia: req.body.Etnia, 
        Altura: req.body.Altura,
        Peso: req.body.Peso,
        Comoborbilidad: req.body.Comoborbilidad,
        Alergias: req.body.Alergias,
        Alcohol: req.body.Alcohol,
        Tabaquismo: req.body.Tabaquismo,
        Drogas: req.body.Drogas,
        Medicamentos: req.body.Medicamentos,})


        try{
            const userFound = await usuarios.findOne({Cedula:req.body.Cedula})

            if(userFound != null){
                historia.Usuario = [userFound._id];              
                const savedHistoria = await historia.save()
                res.json({message:'new historia add'})

                }else{
                    res.json({message:"Verifica el numero de cedula"})
                }

            
        }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
    }
    



///segunda accion actualizar todos
exports.update=async(req,res)=>{
    //
        try{
            
            const historia=await historias.findByIdAndUpdate(
                {_id:req.params.id},
                req.body,
                {new:true}
            )
            res.json({message:'historia has been update'})
        }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
    }
    
///segunda accion eliminar todos
exports.delete=async(req,res)=>{
    //
        try{
            
            const historia=await historias.findByIdAndDelete(
                {_id:req.params.id}
            )
            res.json({message:'historia has been delete'})
        }catch(error){
        console.log(error)
        res.send(error)
        next()
    }


    }