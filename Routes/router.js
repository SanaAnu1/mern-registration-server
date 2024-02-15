const express =require('express')
const UserController=require('../controllers/UserController.js')

const router= new express.Router()


//register api
router.post('/register',UserController.register)
//get userdetails
router.get('/studentlist',UserController.userDetails)




module.exports=router