const express=require('express')
const router=express.Router()
const historiasController=require('../controllers/historiasController')

module.exports=()=>{
    //llamado get users
    router.get('/historias',historiasController.list)

    //llamado post users
    router.post('/historias',historiasController.add)

    //llamado put users
    router.put('/historias/:id',historiasController.update)

    
    //llamado delete users
    router.delete('/historias/:id',historiasController.delete)



    return router

}
