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

export default dbConnection;
