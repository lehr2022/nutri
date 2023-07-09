
const usuarios = require('../models/usuarios')


///primera accion listar todos
exports.list=async(req,res)=>{

    try{
    const colUsuarios=await usuarios.find({})
    res.json(colUsuarios)
}catch(error){
    console.log(error)
    res.send(error)
    next()
}
}


///segunda accion ingresar todos
exports.add=async(req,res)=>{
const usuario=new usuarios(req.body)
    try{
        await usuario.save()
        res.json({message:'new user add'})
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
            
            const usuario=await usuarios.findByIdAndUpdate(
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
            
            const usuario=await usuarios.findByIdAndDelete(
                {_id:req.params.id}
            )
            res.json({message:'user has been delete'})
        }catch(error){
        console.log(error)
        res.send(error)
        next()
    }


    }
    

///Login de usuarios

exports.login = async (req, res) => {

    const login = new usuarios(req.body)
    try {
        const usuario = await usuarios.find({
            Username: req.body.Username,
            Password: req.body.Password,
        })

        if (usuario.length == 1) {
            const sesion = await usuarios.find({
                _id: usuario[0]._id
            })
            res.json({Username:sesion[0].Username, Nombre:sesion[0].Nombre})
        }else{
            res.json({message:"Usuario y contraseña invalidos"})
        }


    } catch (error) {
        console.log(error)
        res.send(error)
        next()
    }
}