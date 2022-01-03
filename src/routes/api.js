const express = require('express');

const router = express.Router();

const cors = require('cors');

const bodyParser = require('body-parser');

var db = require('../model/posts');

router.use(cors());

// RETORNA TODOS OBJETOS db
router.get('/all', (req, res) => {
    let request = db.allToDo(function (result) {
        res.send(JSON.stringify(result));
    });
});

// INSERI UM NOVO OBJETO NO db
router.post('/new', bodyParser.json(), (req, res) => {
    let { title } = req.body;

    let request = db.insertToDo(title, function (result) {
        console.log(result);
    });

    res.send('Post adicionado com sucesso');
});

//DELETA UM OBJETO NO db
router.delete('/delete/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    delete db.deleteToDo(index);

    res.send('Post deletado com sucesso');
});

module.exports = router;
