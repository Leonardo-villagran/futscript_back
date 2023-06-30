const pool = require('../config/database'); 

const registrarJugador = async (jugador, id_equipo) => {

    try {

        const {name, position} = jugador;

        // Verificar si el email ya está registrado
        const emailExistente = await pool.query("SELECT name FROM jugadores WHERE name = $1", [name]);
        //console.log(emailExistente.rows.length)
        if (emailExistente.rows.length > 0) {
            
            throw { code: 400, message: "El jugador ya está registrado." };
        } else {

            const values = [name, id_equipo, position];
            //Insertar nuevo usuario en la base de datos. 
            const consulta = "INSERT INTO jugadores (name, id_equipo, position) values($1, $2, $3) RETURNING *";
            const result = await pool.query(consulta, values);
            console.log("Jugador ingresado con éxito.")
            return result.rows[0];
        }

    } catch (error) {
        if (error.code) {
            // Si el error tiene un código definido, se lanza tal cual
            throw error;
        } else {
            // Si el error es genérico, se lanza con el código 500
            console.log("Hay un error interno en el sistema.");
            throw { code: 500, message: "Hay un error interno en el sistema." };
        }
    }
}

const obtenerJugadoresPorEquipo = async (id_equipo) => {
    try {

        //Seleccionar los datos del usuario desde la base de datos
        const consulta = "SELECT c.name as equipo, a.name as name, b.name as posicion  FROM jugadores as a inner join posiciones as b on a.position = b.id inner join equipos AS c ON a.id_equipo=c.id WHERE a.id_equipo = $1";
        values=[id_equipo];
        const { rowCount, rows } = await pool.query(consulta, values);
        if (!rowCount) throw { code: 404, message: "No se encontró ningún jugador." }
        return rows;
    } catch (error) {
        throw { code: error.code || 500, message: "Hay un error interno en el sistema." };
    }
}



module.exports = {
    registrarJugador,
    obtenerJugadoresPorEquipo
};
