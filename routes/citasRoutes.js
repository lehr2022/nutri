const express=require('express')
const router=express.Router()
const citasController=require('../controllers/citasController')

module.exports=()=>{
    //llamado get users
    router.get('/cites',citasController.list)

    //llamado post users
    router.post('/cites',citasController.add)

    //llamado put users
    router.put('/cites/:id',citasController.update)

    
    //llamado delete users
    router.delete('/cites/:id',citasController.delete)



    return router

}
