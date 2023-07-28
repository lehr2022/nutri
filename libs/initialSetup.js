const mongoose=require('mongoose')
const rol = require('../models/rol')

const createRoles=async()=>{

try{
const count = await rol.estimatedDocumentCount()

if (count > 0) return;


await new rol({name:'user'}).save(),
await new rol({name:'moderator'}).save(),
await new rol({name:'admin'}).save(),


console.log(new rol)

}catch(error){
    console.log(error)
 
}


}

module.exports = createRoles;