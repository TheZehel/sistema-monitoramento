const express = require('express');
const http = require('http');
const ping = require('./ping');
const hostsRouter = require('./routes/hosts')

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use('/api', hostsRouter);

//rota que aceita o GET com o endereço IP ou Hostname do host a ser monitorado.
app.get('/ping/:host', async (req, res) => {
    const host = req.params.host;
    const isAlive = await ping(host);

    if (isAlive) {
        res.status(200).send(`${host} esta vivo.`);
    } else {
        res.status(500).send(`${host} não esta rodando.`)
    }
});

server.listen(3000, () => {
    console.log('O servidor esta rodando na porta 3000')
});