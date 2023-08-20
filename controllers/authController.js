const usuarios = require('../models/usuarios')
const jwt=require('jsonwebtoken')
const role = require('../models/rol')


exports.signup=async(req, res, next) =>{

    const {username, email, password, rol} = req.body;
    
 
    const usuario=new usuarios({
        Username:req.body.Username,
        Email:req.body.Email,
        Password: await usuarios.encryptPassword(req.body.Password)})

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
         

        }catch(error){
        console.log(error)
        res.send(error)
        next()
    } 
       
}

exports.signin=async(req,res) =>{

    //const signin = new usuarios(req.body)
    res.json("signin")
   
       
}