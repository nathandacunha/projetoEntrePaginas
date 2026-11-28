import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import cadastro from './routers/cadastro.js';
import { tratadorDeErros } from './middlewares/tratadorDeErros.js';
import session from 'express-session';
import login from './routers/login.js';
import logout from './routers/logout.js';

const app = express();

/*app.use(cors({
    origin: 'http://localhost:5173', // é a porta do front
    credentials: true
})); */
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: false, // só em desenvolvimento, na produção vira true
        maxAge: 1000*60*60*24,
    },
}));

app.get('/api/health', (req, res) => {
    const { total } = db.prepare('SELECT COUNT(*) AS total FROM users').get();
    res.json({ status: 'ok', usuarios: total });
});

// como o router define post('/'), o caminho completo fica /api/auth/cadastro
app.use('/api/auth/cadastro', cadastro);
app.use('/api/auth/login', login);
app.use('/api/auth/logout', logout);
app.use(tratadorDeErros);

export default app;