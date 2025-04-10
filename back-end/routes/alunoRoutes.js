const express = require('express')
const AlunoController = require('../controllers/alunoController')

const router = express.Router()

router.get("/aluno", AlunoController.listarTodos)
router.post("/aluno", AlunoController.criar)
router.put("/aluno/:matricula", AlunoController.editar)
router.get("/aluno/:matricula", AlunoController.listarPorMatricula)
router.delete("/aluno/:matricula", AlunoController.excluirPorMatricula)
router.delete("/aluno", AlunoController.excluirTodos)

module.exports = router