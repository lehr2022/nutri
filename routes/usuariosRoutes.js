const express=require('express')
const router=express.Router()
const usuariosController=require('../controllers/usuariosController')
const checkExistingUser=require('../middlewares/verifySignup')

module.exports=()=>{
    //llamado get users
    router.get('/users',usuariosController.list)

    //llamado post users
    router.post('/users',checkExistingUser, usuariosController.add)

    //llamado put users
    router.put('/users/:id',usuariosController.update)

    
    //llamado delete users
    router.delete('/users/:id',usuariosController.delete)

    
    //llamado post login
    router.post('/login',usuariosController.login)


    return router

}
