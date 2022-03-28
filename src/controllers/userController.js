import toDo from '../model/userModel.js';

import { validateInsertToDo, validateEditToDo } from './validateData';

const allToDo = (req, res) => {
    const toDos = toDo.findAll();

    res.send(JSON.stringify(toDos));
};

const insertToDo = (req, res) => {
    let { error } = validateInsertToDo(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { title } = req.body;

    const newTodo = await toDo.create({toDo: title})

    if(!newTodo) return res.status(400).send('Falha ao adicionar novo Post')

    res.send('Post adicionado com sucesso')
};

const editToDo = (req, res) => {
    let { error } = validateEditToDo(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { title } = req.body;

    let { index } = req.params;

    const updateToDo = toDo.update({toDo: title}, {
        where: {
            toDoID: index
        }
    })

    if(!updateToDo) return res.status(400).send('Falha ao editar post');

    res.send('Post editado com sucesso')
};

const deleteToDo = (req, res) => {
    let { index } = req.params;

    db.deleteToDo(index, function (result) {
        console.log(result);

        res.send('Post deletado com sucesso');
    });
};

export { allToDo, insertToDo, editToDo, deleteToDo };
