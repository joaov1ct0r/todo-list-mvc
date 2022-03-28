import sequelize from 'sequelize';

let { Sequelize } = sequelize;

const dbConnection = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);

try {
    await dbConnection.authenticate();

    console.log('Conectado ao DB!');
} catch (error) {
    throw error;
}

export default dbConnection;
