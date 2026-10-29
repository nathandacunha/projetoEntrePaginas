import express from 'express';
import cors from 'cors';
import db from './config/database.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // é a porta do front
    credentials: true
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
    const { total } = db.prepare('SELECT COUNT(*) AS total FROM users').get();
    res.json({ status: 'ok', usuarios: total });
});

export default app;