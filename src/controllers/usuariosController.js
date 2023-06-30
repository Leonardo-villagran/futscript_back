require('dotenv').config();
const jwt = require("jsonwebtoken")
const usuariosModels = require('../models/usuariosModels');

const registrarUsuario = async (req, res) => {
    try {
        const usuario = req.body;
        await usuariosModels.registrarUsuario(usuario);
        //console.log(row);
        res.status(201).json({mensaje: "Usuario creado con éxito"});
    } catch ({ code, message }) {
        console.log(message);
        res.status(code || 500).json(message);
    }
}

const realizarLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        await usuariosModels.verificarCredenciales(email, password);
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        console.log("Token generado para usuario: ", email);
        res.json({ message: 'Token enviado', token });
    } catch ({ code, message }) {
        console.log(message);
        res.status(code || 500).send(message);
    }
}

module.exports = {
    realizarLogin,
    registrarUsuario
};