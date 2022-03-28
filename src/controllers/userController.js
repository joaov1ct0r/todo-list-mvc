import db from '../model/userModel.js';

import { validateInsertToDo, validateEditToDo } from './validateData';

const allToDo = (req, res) => {
    db.allToDo(function (result) {
        res.send(JSON.stringify(result));
    });
};

const insertToDo = (req, res) => {
    let { error } = validateInsertToDo(req.body);

    if (error) {
        return res.status(400).send('Falha na autenticação');
    }
    let { title } = req.body;

    db.insertToDo(title, function (result) {
        console.log(result);

        res.send('Post adicionado com sucesso');
    });
};

const editToDo = (req, res) => {
    let { error } = validateEditToDo(req.body);

    if (error) {
        return res.status(400).send('Falha na autenticação');
    }
    let { title } = req.body;

    let { index } = req.params;

    db.editToDo(title, index, function (result) {
        console.log(result);

        res.send('Post editado com sucesso');
    });
};

const deleteToDo = (req, res) => {
    let { index } = req.params;

    db.deleteToDo(index, function (result) {
        console.log(result);

        res.send('Post deletado com sucesso');
    });
};

export { allToDo, insertToDo, editToDo, deleteToDo };
