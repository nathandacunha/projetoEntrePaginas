import express from 'express';

app.use((req, res, next) => {
    console.log("REQ: ", req.method, req.url);
    next();
});

export default requisicoes;