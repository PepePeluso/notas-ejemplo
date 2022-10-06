// Importaciones
const { Router } = require("express")
const { getEstudiantes, postEstudiante, getEstudianteByCedula, putEstudiante, deleteEstudiante } = require("../controllers/estudiantes.controller")
const { getNotas, getNotasNombres, getNotasByID, postNotas, putNotas, deleteNota } = require("../controllers/notas.controllers")
const router = Router()

const URLV1 = "/v1"

//Rutas notas V1
router.get(URLV1 + "/notas", getNotas)
router.get(URLV1 + "/notas/:id", getNotasByID)
router.get(URLV1 + "/estudiantes/notas", getNotasNombres)
router.post(URLV1 + "/notas", postNotas)
router.put(URLV1 + "/notas", putNotas)
router.delete(URLV1 + "/notas/:id", deleteNota)

//Rutas estudiantes V1
router.get(URLV1 + "/estudiantes", getEstudiantes)
router.get(URLV1 + "/estudiantes/:cedula", getEstudianteByCedula)
router.post(URLV1 + "/estudiantes", postEstudiante)
router.put(URLV1 + "/estudiantes", putEstudiante)
router.delete(URLV1 + "/estudiantes/:cedula", deleteEstudiante)

module.exports = router