import sequelize from 'sequelize';

let { Sequelize } = sequelize;

const dbConnection = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

try {
    await dbConnection.authenticate();

    console.log('Conectado ao DB!');
} catch (error) {
    throw error;
}

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

// INSERI UM NOVO TO-DO LIST
let insertToDo = (title, callback) => {
    let SQL = `INSERT INTO toDo (toDo) VALUES (?) `;

    db.query(SQL, title, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// DELETA UM TO-DO LIST
let deleteToDo = (index, callback) => {
    let SQL = `DELETE FROM toDo WHERE toDoID = ?`;

    db.query(SQL, index, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// EDITA UM TO-DO LIST
let editToDo = (title, index, callback) => {
    let SQL = `UPDATE toDo SET toDo = ? WHERE toDoID = ?`;

    let params = [title, index];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

module.exports = {
    allToDo,

    insertToDo,

    deleteToDo,

    editToDo
};
