import 'dotenv/config';

import cors from 'cors';

import express from 'express';

import bodyParser from 'body-parser';

import userRouter from './routes/userRoutes.js';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use('/api', cors(), bodyParser.json(), userRouter);

app.use('/', express.static(path.join(__dirname, 'view')));

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
