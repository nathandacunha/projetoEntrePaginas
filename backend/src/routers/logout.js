import express from 'express';

const logout = express.Router();

logout.post('/', (req, res, next) => {
    req.session.destroy((err) => {
        if(err) return next(err);

        res.clearCookie('connect.sid', {
            httpOnly: true,
            sameSite: 'lax',
            secure: false, // igual à configuração da sessão; em produção vira true
        });
        res.status(204).end();
    });
});

export default logout;