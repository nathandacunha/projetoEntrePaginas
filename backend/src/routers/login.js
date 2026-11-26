import express from 'express';
import conexao from '../config/database.js';
import bcrypt from 'bcrypt'; 

const login = express.Router();

login.post('/', async (req, res, next) => {
  try {
    const { cpf, senha } = req.body;

    if (!cpf || !senha) {
      return res.status(400).json({ error: 'Preencha CPF e senha' });
    }

    const usuario = conexao.prepare('SELECT * FROM users WHERE cpf = ?').get(cpf);
    // mesma mensagem nos dois casos, para não revelar se o CPF existe
    if (!usuario) {
      return res.status(401).json({ error: 'CPF ou senha inválidos' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    
    if (!senhaCorreta) {
      return res.status(401).json({ error: 'CPF ou senha inválidos' });
    }

    console.log("Boas vindas", usuario.id, usuario.nome);
    req.session.usuario = { id: usuario.id, nome: usuario.nome };
    res.json({ usuario: { id: usuario.id, nome: usuario.nome } });
  } catch (error) {
    next(error);
  }
});

export default login;