const pool = require('../config/database'); 

const registrarEquipo = async (equipo) => {

    try {
        const {name} = equipo;

        // Verificar si el Equipo ya está registrado
        const emailExistente = await pool.query("SELECT name FROM equipos WHERE name = $1", [name]);
        //console.log(emailExistente.rows.length)
        if (emailExistente.rows.length > 0) {
            
            throw { code: 400, message: "El equipo ya está registrado." };
        } else {

            const values = [name];
            //Insertar nuevo usuario en la base de datos. 
            const consulta = "INSERT INTO equipos (name) values($1) RETURNING *";
            const result = await pool.query(consulta, values);
            console.log("Equipo ingresado con éxito.")
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

const obtenerEquipos = async () => {
    try {

        //Seleccionar los datos del usuario desde la base de datos
        const consulta = "SELECT id, name FROM equipos";
        const { rowCount, rows } = await pool.query(consulta);
        if (!rowCount) throw { code: 404, message: "No se encontró ningún equipo." }
        return rows;
    } catch (error) {
        throw { code: error.code || 500, message: "Hay un error interno en el sistema." };
    }
}

module.exports = {
    registrarEquipo,
    obtenerEquipos
};