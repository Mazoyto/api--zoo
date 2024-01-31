import express from 'express';
import cors from 'cors';

const port: number = 4329;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json('Olá mundo!!');
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})