import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const port: number = 4329;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Tucano', 90,'Macho',1000);
    let reptil: Reptil = new Reptil('Calango', 250,'Macho','Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro',102,'Cicloides');
    res.json('ave');
});

server.post('/ave' , (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é:", ave]);
});

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atracao criado');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoologico = new Zoologico(nome, atracao);
    console.log(zoologico);
    res.status(200).json('zoologico criado');
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
});
