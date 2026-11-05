console.log(" app.js carregado");

import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import cadastro from './routers/cadastro.js';
import { tratadorDeErros } from './middlewares/tratadorDeErros.js';

const app = express();

/*app.use(cors({
    origin: 'http://localhost:5173', // é a porta do front
    credentials: true
})); */
app.use(cors());

app.use(express.json());

app.get('/api/health', (req, res) => {
    const { total } = db.prepare('SELECT COUNT(*) AS total FROM users').get();
    res.json({ status: 'ok', usuarios: total });
});

// como o router define post('/'), o caminho completo fica /api/auth/cadastro
app.use('/api/auth/cadastro', cadastro);

app.use(tratadorDeErros);

export default app;