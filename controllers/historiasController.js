
const historias = require('../models/historias')


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
    const historia=new historias(req.body)
        try{
            await historia.save()
            res.json({message:'new historia add'})
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