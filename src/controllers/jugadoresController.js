require('dotenv').config();
const jugadoresModels = require('../models/jugadoresModels');

const registrarJugador = async (req, res) => {
    try {
        const jugador = req.body;
        const id_equipo = req.params.teamID;
        const row = await jugadoresModels.registrarJugador(jugador, id_equipo);
        console.log(row);
        res.status(201).json({mensaje:"Jugador ingresado con éxito."});
    } catch ({ code, message }) {
        console.log(message);
        res.status(code || 500).json(message);
    }
}

const obtenerJugadores = async (req, res) => {
    try {

        const id_equipo = req.params.teamID;
        const result = await jugadoresModels.obtenerJugadoresPorEquipo(id_equipo);
        console.log("Datos de jugadores enviados. Datos: ", result);
        res.json(result);

    } catch ({ code, message }) {
        console.log(message);
        res.status(code || 500).send(message);
    }
}

module.exports = {
    registrarJugador,
    obtenerJugadores
};