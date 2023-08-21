const express=require('express')
const router=express.Router()
const historiasController=require('../controllers/historiasController')
const verifyToken=require('../middlewares/authjwt')
const isUser = require('../middlewares/userol')
const isAdmin = require('../middlewares/adminrol')

module.exports=()=>{
    //llamado get users
    router.get('/historias',verifyToken,isUser,historiasController.list)

    //llamado post users
    router.post('/historias',verifyToken,isUser,historiasController.add)

    //llamado put users
    router.put('/historias/:id',verifyToken,isAdmin,historiasController.update)

    
    //llamado delete users
    router.delete('/historias/:id',verifyToken,isAdmin,historiasController.delete)



    return router

}
