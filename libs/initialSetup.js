const rol = require ("../models/rol.js");
const User = require ("../models/usuarios.js");


const createRoles = async () => {
  try {
    // Count Documents
    const count = await rol.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;


 // Create default Roles
 const values = await Promise.all([
  new rol({name:"user"}).save(),
  new rol({name:"moderator"}).save(),
  new rol({name:"admin"}).save(),
]);

console.log(values);
  } catch (error) {
    console.error(error);
  }
};



module.exports = createRoles;