import express from 'express';
const router = express.Router();

import { 
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword, 
    perfil
 } from '../controllers/usuarioController.js';
import checkAuth from '../middleware/checkAuth.js'

// Autenticacion, registro y confirmacion de Usuarios
router.post("/", registrar); // Crear un nuevo Usuario
router.post("/login", autenticar); // registro de login
router.get("/confirmar/:token", confirmar); 
router.post("/olvide-password", olvidePassword); 

router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
router.get('/perfil', checkAuth, perfil);



export default router;