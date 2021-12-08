module.exports = {
    toDoList = [
      {
          id: generateId(),
          title: "Teste"
      }
    ],

    // RETORNA TODOS OS TO-DO LIST
    allToDo() {
      return this.toDoList
    },

    // INSERI UM NOVO TO-DO LIST
    insertToDo(title) {
      let id = generateId()

      let title = title

      this.toDoList.push({id, title})
    },

    // DELETA UM TO-DO LIST
    deleteToDo(index) {
      delete this.toDoList[index]
    }
}

const generateId = () => {
  return Math.random().toString(26).substr(2, 9);
};