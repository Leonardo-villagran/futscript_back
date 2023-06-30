require('dotenv').config();
const equiposModels = require('../models/equiposModels');

const agregarEquipo = async (req, res) => {
    try {
        const equipo = req.body;
        const row = await equiposModels.registrarEquipo(equipo);
        console.log(row);
        res.status(201).json({mensaje: "Equipo ingresado con éxito."});
    } catch ({ code, message }) {
        console.log(message);
        res.status(code || 500).json(message);
    }
}

const obtenerEquipos = async (req, res) => {
    try {
        result = await equiposModels.obtenerEquipos();
        console.log("Datos de cada equipo enviados. Datos: ", result);
        res.json(result);

    } catch ({ code, message }) {
        console.log(message);
        res.status(code || 500).send(message);
    }
}

module.exports = {
    agregarEquipo,
    obtenerEquipos
    
};