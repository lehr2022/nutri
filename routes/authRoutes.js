const express=require('express')
const router=express.Router()
const authController=require('../controllers/authController')

module.exports=()=>{
//llamado post users
router.post('/signup',authController.signup)

//llamado post users
router.post('/signin',authController.signin)

    return router
}
