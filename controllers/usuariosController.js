
const usuarios = require('../models/usuarios')
const jwt=require('jsonwebtoken')
const role = require('../models/rol')


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


///segunda accion ingresar todos (Este es el mismo SignUp)
exports.add=async(req,res, next)=>{

    const {username, email, password, rol} = req.body;

const usuario=new usuarios({
    Name: req.body.Name,
    Surname: req.body.Surname,
    Cedula: req.body.Cedula,
    Username:req.body.Username,
    Email:req.body.Email,
    Phone:req.body.Phone,
    Password: await usuarios.encryptPassword(req.body.Password)},
    

)
    try{

        if (rol){
            const foundRol = await role.find({name: {$in: rol}})
            usuario.Rol = foundRol.map(rol => rol._id)
        }else{
            const rol = await role.findOne({ name: "user" });
            usuario.Rol = [rol._id];
        }

   
        const savedUser = await usuario.save()

        const token = jwt.sign({id: savedUser._id},"products-api",{expiresIn: 86400})

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
            Email: req.body.Email,
            Password: req.body.Password,
        })

        if (usuario.length == 1) {
            const sesion = await usuarios.find({
                _id: usuario[0]._id
            })
            const token = jwt.sign({id: usuario[0]._id},"products-api",{expiresIn: 86400})
            res.json({Name: sesion[0].Name, Surname: sesion[0].Surname, Cedula: sesion[0].Cedula, Username: sesion[0].Username, Email: sesion[0].Email, Phone: sesion[0].Phone, Password: sesion[0].Password, token })
        }else{
            res.json({message:"Usuario y contraseña invalidos"})
        }


    } catch (error) {
        console.log(error)
        res.send(error)
        next()
    }
}



///primera accion traer usaurio
exports.findone = async (req, res) => {

    try {
        const colUsuarios = await usuarios.aggregate([
            { 
                $match: { 
                    $expr: {
                        $eq: [
                            '$Username', req.params.username
                        ]
                    }
                }
            },

          ])
        
        res.json(colUsuarios)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
