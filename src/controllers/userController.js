import toDo from '../model/userModel.js';

import { validateInsertToDo, validateEditToDo } from './validateData';

const allToDo = (req, res) => {
    try {
        const toDos = toDo.findAll();
        
        if(!toDos) return res.status(400).send('Falha ao enviar toDos');

        res.send(JSON.stringify(toDos));
    } catch (error) {
        throw error;
    }
};

const insertToDo = (req, res) => {
    let { error } = validateInsertToDo(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { title } = req.body;

    try {
        const newTodo = await toDo.create({toDo: title})

        if(!newTodo) return res.status(400).send('Falha ao adicionar novo Post')
    
        res.send('Post adicionado com sucesso') 
    } catch (error) {
       throw error; 
    }
};

const editToDo = (req, res) => {
    let { error } = validateEditToDo(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { title } = req.body;

    let { index } = req.params;

    try {
        const updateToDo = toDo.update({toDo: title}, {
            where: {
                toDoID: index
            }
        })
    
        if(!updateToDo) return res.status(400).send('Falha ao editar post');
    
        res.send('Post editado com sucesso')
    } catch (error) {
        throw error
    }
};

const deleteToDo = (req, res) => {
    let { index } = req.params;

    try {
        const deleteToDo = await toDo.destroy({
            where: {
                toDoID: index
            }
        })
    
        if(!deleteToDo) return res.status(400).send('Falha ao deletar Post')
    
        res.send('Post deletado com sucesso')  
    } catch (error) {
        throw error
    }
};

export { allToDo, insertToDo, editToDo, deleteToDo };
