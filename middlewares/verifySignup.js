const usuarios = require ("../models/usuarios.js");
const jwt = require('jsonwebtoken');

const checkExistingUser = async (req, res, next) => {
    try {
      const userFound = await usuarios.findOne({ Username: req.body.Username });
      if (userFound)
        return res.status(400).json({ message: "The user already exists" });
  
      const email = await usuarios.findOne({ Email: req.body.Email });
      if (email)
        return res.status(400).json({ message: "The email already exists" });
  
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = checkExistingUser;