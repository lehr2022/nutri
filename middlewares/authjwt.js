const usuarios = require ("../models/usuarios.js");
const jwt = require('jsonwebtoken');
const role = require('../models/rol');


const verifyToken = async (req, res, next) => {

        let token = req.headers["x-access-token"];
      
        if (!token) return res.status(403).json({ message: "No token provided" });
      
        try {
          const decoded = jwt.verify(token, "products-api");
          req.userId = decoded.id;
          
      
          const user = await usuarios.findById(req.userId, { password: 0 });
        
          if (!user) return res.status(404).json({ message: "No user found" });
      
          next();
        } catch (error) {
          return res.status(401).json({ message: "Unauthorized!" });
        }
      };

      module.exports = verifyToken;

      
     