module.exports = {
    toDoList: [
        {
            id: "alkdfjs",
            title: "Insira uma task"
        }
    ],

    // RETORNA TODOS OS TO-DO LIST
    allToDo() {
        return this.toDoList;
    },

    // INSERI UM NOVO TO-DO LIST
    insertToDo(title) {
        this.toDoList.push({ id: generateId(), title });
    },

    // DELETA UM TO-DO LIST
    deleteToDo(index) {
        delete this.toDoList[index];
    }
};

const generateId = () => {
    return Math.random().toString(26).substr(2, 9);
};
