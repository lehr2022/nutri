const express=require('express')
const router=express.Router()
const citasController=require('../controllers/citasController')
const verifyToken = require('../middlewares/authjwt')
const isUser = require('../middlewares/userol')
const isAdmin = require('../middlewares/adminrol')


module.exports=()=>{
    //llamado get users
    router.get('/cites',verifyToken,isUser,citasController.list)

    //llamado post users
    router.post('/cites',verifyToken,isUser,citasController.add)

    //llamado put users
    router.put('/cites/:id',verifyToken,isAdmin,citasController.update)

    
    //llamado delete users
    router.delete('/cites/:id',verifyToken,isAdmin,citasController.delete)



    return router

}
