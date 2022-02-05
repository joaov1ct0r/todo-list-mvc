const db = require('../model/db');

const user = {
    allToDo(req, res) {
        db.allToDo(function (result) {
            res.send(JSON.stringify(result));
        });
    }
};
