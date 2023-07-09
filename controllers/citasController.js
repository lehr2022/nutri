
const citas = require('../models/citas')


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
exports.add=async(req,res)=>{


 
    const cita=new citas(req.body)
    
    try{
            await cita.save()
            res.json({message:'new cite add'})
        
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
            res.json({message:'user has been update'})
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