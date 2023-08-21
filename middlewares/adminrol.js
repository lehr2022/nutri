const usuarios = require ("../models/usuarios.js");
const jwt = require('jsonwebtoken');
const role = require('../models/rol.js');
      
const isAdmin = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"];
      
        if (!token) return res.status(403).json({ message: "No token provided" });
    
          const decoded = jwt.verify(token, "products-api");
          req.userId = decoded.id;
    const user = await usuarios.findById(req.userId);
    const roles = await role.find({ _id: { $in: user.Rol } });

    let rolex = Object.values(roles)
    for (let i = 0; i < rolex.length; i++) {
      if (rolex[i].name == "admin"){
        next();
        return;
        }
      }   
    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

module.exports = isAdmin;
