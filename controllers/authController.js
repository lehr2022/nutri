const usuarios = require('../models/usuarios')
const jwt=require('jsonwebtoken')


exports.signup=async(req, res, next) =>{

    const {username, email, password, rol} = req.body;
    
 
    const usuario=new usuarios({
        Username:req.body.Username,
        Email:req.body.Email,
        Password: await usuarios.encryptPassword(req.body.Password)})

        try{
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