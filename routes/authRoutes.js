const express=require('express')
const router=express.Router()
const authController=require('../controllers/authController')
const checkExistingUser=require('../middlewares/verifySignup')

module.exports=()=>{
//llamado post users
router.post('/signup',checkExistingUser, authController.signup)

//llamado post users
router.post('/signin',authController.signin)

    return router
}
