const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");

const toDoList = require("../model/posts");

// RETORNA TODOS OBJETOS TODOLIST
router.get("/", (req, res) => {
    res.send(JSON.stringify(toDoList.allToDo()));
});

// INSERI UM NOVO OBJETO NO TODOLIST
router.post("/new", bodyParser.json(), (req, res) => {
    let { title } = req.body;

    toDoList.insertToDo({ title });

    res.send("Post adicionado com sucesso");
});

//DELETA UM OBJETO NO TODOLIST
router.delete("/delete/:index", bodyParser.json(), (req, res) => {
    let { index } = req.params;

    delete toDoList.deleteToDo(index);

    res.send("Post deletado com sucesso");
});

module.exports = router;
