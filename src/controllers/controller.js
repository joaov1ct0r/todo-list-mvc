const db = require('../model/db');

const user = {
    allToDo(req, res) {
        db.allToDo(function (result) {
            res.send(JSON.stringify(result));
        });
    },

    insertToDo(req, res) {
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
    }
};

module.exports = user;
