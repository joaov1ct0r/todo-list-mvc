const express = require("express");

const PORT = 3000;

const bodyParser = require("body-parser");

const app = express();

let toDoList = [
    {
        id: generateId(),
        title: "Teste"
    }
];

app.get("/", (req, res) => {});

const generateId = () => {
    return Math.random().toString(26).substr(2, 9);
};

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
