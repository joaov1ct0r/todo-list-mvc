const express = require('express');

const router = express.Router();

const cors = require('cors');

const bodyParser = require('body-parser');

const controller = require('../controllers/controller');

var db = require('../model/db');

router.use(cors());

// RETORNA TODOS OBJETOS db
router.get('/all', controller.allToDo);

// INSERI UM NOVO OBJETO NO db
router.post('/new', controller.insertToDo);

// EDITA UM TO-DO LIST
router.put('/edit/:index', controller.editToDo);

//DELETA UM OBJETO NO db
router.delete('/delete/:index', controller.deleteToDo);

module.exports = router;
