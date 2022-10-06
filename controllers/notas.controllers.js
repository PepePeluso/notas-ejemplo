const { db } = require("../cnn")

//consultas
const getNotas = async (req, res) => {
    const consulta = "SELECT * from notas;"
    const response = await db.query(consulta)
    res.status(200).json(response)
}

const getNotasNombres = async (req, res) => {
    const consulta = "SELECT * FROM vw_notas_nombres_apellidos ORDER BY concat;"
    const response = await db.query(consulta)
    res.status(200).json(response)
}

const getNotasByID = async (req,res) => {
    const consulta = "SELECT * FROM notas WHERE not_id = $1;"
    try {
        const ID = req.params.id
        const response = await db.one(consulta,[ID])
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: "No se ha encontrado un registro de notas con este ID ("
                + req.params.id + ")."
        })
    }
}

const postNotas = async (req,res) => {
    const consulta = "INSERT INTO notas(not_est_cedula, not_proyectos, not_deberes," +
        "not_examen) VALUES ($1,$2,$3,$4) RETURNING *;"
    try {
        const notas = req.body
        const response = await db.one(consulta, [
            notas.cedula,
            notas.proyectos,
            notas.deberes,
            notas.examen
        ])
        res.status(201).json({
            message: "Nota ingresada correctamente",
            body: response,
        });
    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: e.message
        })
    }
}

const putNotas = async (req,res) => {
    const consulta = "UPDATE notas SET not_est_cedula = $2, not_proyectos = $3," +
	    "not_deberes = $4, not_examen = $5 WHERE not_id = $1 RETURNING *;"
    try {
        const notas = req.body
        const response = await db.one(consulta, [
            notas.id,
            notas.cedula,
            notas.proyectos,
            notas.deberes,
            notas.examen
        ])
        res.status(200).json({
            message: "Nota actualizada correctamente",
            body: response,
        });
    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: e.message
        })
    }
}

const deleteNota = async (req,res) => {
    const consulta = "DELETE FROM notas WHERE not_id = $1;"
    try {
        const id = req.params.id
        const response = await db.query(consulta,[id])
        res.status(200).json({
            message: "La nota con id  " + id + " se ha eliminado correctamente."
        })
    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: e.message
        })
    }
}

module.exports = {
    getNotas, getNotasNombres, getNotasByID,
    postNotas, putNotas, deleteNota
}