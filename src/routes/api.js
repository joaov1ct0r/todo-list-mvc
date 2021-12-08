const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");

// RETORNA TODOS OBJETOS TODOLIST
router.get("/", (req, res) => {
    res.send(JSON.stringify(toDoList));
});

// INSERI UM NOVO OBJETO NO TODOLIST
router.post("/new", bodyParser.json(), (req, res) => {
    let id = generateId();

    let { title } = req.body;

    toDoList.push({ id, title });

    res.send("Post adicionado com sucesso");
});

//DELETA UM OBJETO NO TODOLIST
router.delete("/delete/:index", bodyParser.json(), (req, res) => {
    let { index } = req.params;

    delete toDoList[index];

    res.send("Post deletado com sucesso");
});

module.exports = router;
