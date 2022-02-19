const db = require('../model/db');

let { validateInsertToDo, validateEditToDo } = require('./validateData');

const user = {
    allToDo(req, res) {
        db.allToDo(function (result) {
            res.send(JSON.stringify(result));
        });
    },

    insertToDo(req, res) {
        let { error } = validateInsertToDo(req.body);

        if (error) {
            return res.status(400).send('Falha na autenticação');
        }
        let { title } = req.body;

        db.insertToDo(title, function (result) {
            console.log(result);

            res.send('Post adicionado com sucesso');
        });
    },

    editToDo(req, res) {
        let { title } = req.body;

        let { index } = req.params;

        db.editToDo(title, index, function (result) {
            console.log(result);

            res.send('Post editado com sucesso');
        });
    },

    deleteToDo(req, res) {
        let { index } = req.params;

        db.deleteToDo(index, function (result) {
            console.log(result);

            res.send('Post deletado com sucesso');
        });
    }
};

module.exports = user;
