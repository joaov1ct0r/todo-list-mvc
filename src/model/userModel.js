import { DataTypes } from 'sequelize';

import dbConnection from '../config/database.js';

const toDo = dbConnection.define(
    'toDo',
    {
        toDo: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        toDoID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        freezeTableName: true,
        tableName: 'toDo',
        timestamps: false
    }
);

toDo.sync();

export default toDo;
