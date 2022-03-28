import express from 'express';

import {
    allToDo,
    insertToDo,
    editToDo,
    deleteToDo
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/all', allToDo);

userRouter.post('/new', insertToDo);

userRouter.put('/edit/:index', editToDo);

userRouter.delete('/delete/:index', deleteToDo);

export default userRouter;
