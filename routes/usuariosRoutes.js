const express=require('express')
const router=express.Router()
const usuariosController=require('../controllers/usuariosController')
const checkExistingUser=require('../middlewares/verifySignup')
const verifyToken = require('../middlewares/authjwt')
const isAdmin = require('../middlewares/adminrol')

module.exports=()=>{
    //llamado get users
    router.get('/users',verifyToken,isAdmin,usuariosController.list)

    //llamado post users
    router.post('/users',checkExistingUser, usuariosController.add)

    //llamado put users
    router.put('/users/:id',verifyToken,isAdmin,usuariosController.update)

    
    //llamado delete users
    router.delete('/users/:id',verifyToken,isAdmin,usuariosController.delete)

    
    //llamado post login
    router.post('/login',usuariosController.login)


    return router

}
