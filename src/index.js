const express = require("express");

const PORT = 3000;

const bodyParser = require("body-parser");

const app = express();

const generateId = () => {
    return Math.random().toString(26).substr(2, 9);
};

let toDoList = [
    {
        id: generateId(),
        title: "Teste"
    }
];

// RETORNA TODOS OBJETOS TODOLIST
app.get("/", (req, res) => {
    res.send(JSON.stringify(toDoList));
});

// INSERI UM NOVO OBJETO NO TODOLIST
app.post("/new", bodyParser.json(), (req, res) => {
    let id = generateId();

    let { title } = req.body;

    toDoList.push({ id, title });

    res.send("Post adicionado com sucesso");
});

//DELETA UM OBJETO NO TODOLIST
app.delete("/delete/:index", bodyParser.json(), (req, res) => {
    let { index } = req.params;

    delete toDoList[index];

    res.send("Post deletado com sucesso");
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
