const mongoose=require('mongoose')
const rol = require('../models/rol')

const createRoles=async()=>{

try{
const count = await rol.estimatedDocumentCount()

if (count > 0) return;

const values = await Promise.all([
new rol({name:'user'}).save(),
new rol({name:'moderator'}).save(),
new rol({name:'admin'}).save(),
])

console.log(values)

}catch(error){
    console.log(error)
 
}


}

module.exports = createRoles;