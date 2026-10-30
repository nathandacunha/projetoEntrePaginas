import express from 'express';
import conexao from '../config/database.js';
import bcrypt from 'bcrypt';

const cadastro = express.Router();

cadastro.post('/', async (req, res, next) => {
    try {
        const { nome, cpf, email, senha } = req.body;

        // gerando uma senha hash
        const senhaHash = await bcrypt.hash(senha, 10);

        // inserindo informações do usuario no banco de dados
        const stmt = conexao.prepare("INSERT INTO users (nome, email, senha_hash, cpf) VALUES (?, ?, ?, ?)");
        const info = stmt.run(nome, email, cpf, senhaHash);
        
        console.log("Cadastro recebido com sucesso!");
        res.status(201).json({
            usuario: { id: info.lastInsertRowid, nome, email },
        });
    } catch(error) {
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') return res.status(409).json({ erro: 'Email ou CPF já cadastrado' });
        next(error);
    }
});

export default cadastro;