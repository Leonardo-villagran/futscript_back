const router = require('express').Router();
const usuarios = require('../controllers/usuariosController');
const jugadores = require('../controllers/jugadoresController');
const equipos = require('../controllers/equiposController');
const middlewares = require('../middlewares/middlewares');

// Endpoint para el inicio de sesión
router.post('/login', middlewares.verificarCredencialesM, usuarios.realizarLogin);

router.post('/registro', middlewares.validarTokenM, usuarios.registrarUsuario);

router.get('/equipos', middlewares.validarTokenM, equipos.obtenerEquipos);

router.post('/equipos', middlewares.validarTokenM, equipos.agregarEquipo);

router.get('/equipos/:teamID/jugadores', middlewares.validarTokenM, jugadores.obtenerJugadores);

router.post('/equipos/:teamID/jugadores', middlewares.validarTokenM, jugadores.registrarJugador);

module.exports = router;