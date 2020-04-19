import express from 'express';
import bodyParse from 'body-parser';
import { promises as fs } from 'fs';
import { people } from './people';

const app = express();

app.use(bodyParse.json());

app.get('/hello', (request, response) => {
    response.send('Hello from server side !!!');
});

app.get('/people', (request, response) => {
    response.json(people);
});

app.get('/people/:name', (request, response) => {
    const { name } = request.params;
    const person = people.find((x) => x.name === name);
    response.json(person);
});

app.get('/file-data', async (request, response) => {
    const data = await fs.readFile(`${__dirname}/people-data.json`);
    const peopleFromFile = JSON.parse(data);
    response.json(peopleFromFile);
});

app.post('/people', (request, response) => {
    const newPerson = request.body;
    people.push(newPerson);
    response.json(people);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
