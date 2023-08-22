
const citas = require('../models/citas')
const usuarios = require('../models/usuarios')


///primera accion listar todos
exports.list=async(req,res)=>{


    try{
    const colCitas=await citas.find({})
    res.json(colCitas)
 
   
}catch(error){
    console.log(error)
    res.send(error)
    next()
}
}

///segunda accion ingresar todos
exports.add=async(req,res,next)=>{

    const {fecha, cedula, usuario} = req.body;

    const cita=new citas({
        Fecha: req.body.Fecha,
        Cedula: req.body.Cedula,
         })
    try{
        const userFound = await usuarios.findOne({Cedula:req.body.Cedula})

        if(userFound != null){
        cita.Usuario = [userFound._id];
        const savedCita = await cita.save();
        res.json({message:'new cite add'});
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
            
            const cita=await citas.findByIdAndUpdate(
                {_id:req.params.id},
                req.body,
                {new:true}
            )
            res.json({message:'cita has been update'})
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
            
            const cita=await citas.findByIdAndDelete(
                {_id:req.params.id}
            )
            res.json({message:'cita has been delete'})
        }catch(error){
        console.log(error)
        res.send(error)
        next()
    }


    }