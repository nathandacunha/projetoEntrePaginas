export async function cadastrar(req, res, next)  {
    try {
        const usuario = await cadastroService.criar(req.body);
        res.status(201).json(usuario);
    } catch(error) {
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return res.status(409).json({ error: "Email ou CPF já cadastrado" });
        }
        next(error);
    }
}