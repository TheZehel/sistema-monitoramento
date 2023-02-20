const express = require('express');
const router = express.Router();
const hosts = []; // Array responsável por armazenar os hosts.

// Rota que adiciona um novo host
router.post('/hosts', (req, res) => {
    const host = {
        id: hosts.length + 1,
        nome: req.body.nome,
        endereco: req.body.endereco,
        status: 'Offline',
        lastPing: null,
    };
    hosts.push(host);
    res.status(201).json(host);
});

// Rota que lista todos os hosts
router.get('/hosts', (req, res) => {
    res.json(hosts);
});

// Rota que obtém informações de um host em específico
router.get('/hosts/:id', (req, res) => {
    const host = hosts.find((h) => h.id === parseInt(req.params.id));
    if (!host) return res.status(404).json({ message: 'Host não encontrado!' });
    res.json(host);
});

// Rota que atualiza as informações de um Host
router.put('/hosts/:id', (req, res) => {
    const host = hosts.find((h) => h.id === parseInt(req.params.id));
    if (!host) return res.status(404).json({ message: 'Host não encontrado!' });
    host.name = req.body.name || host.name;
    host.address = req.body.address || host.address;
    res.json(host);
  });

// Rota que remove um Host
router.delete('/hosts/:id', (req, res) => {
    const index = hosts.findIndex((h) => h.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Host não encontrado!' });
    hosts.splice(index, 1);
    res.status(204).send();
  });
  

  module.exports = router;