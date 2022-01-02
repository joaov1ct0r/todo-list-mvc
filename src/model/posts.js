let mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'toDoList'
});

// RETORNA TODOS OS TO-DO LIST
let allToDo = callback => {
    let SQL = `SELECT * FROM toDo`;

    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

module.exports = {
    allToDo,

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
