const express = require('express');
const app = express();

const cors = require('cors')

app.use(cors())

const morgan = require('morgan');

morgan.token('body', (req) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(':method :url :status :body - :response-time ms')
);

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.use(express.json());

app.get('/info', (request, response) => {
    response.send(`<h2>Info</h2><p>The phonebook has ${persons.length} entries</p><p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(204).end();
})

const generateId = () => {
    const maxId =
    persons.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0
    return String(maxId + 1)
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'Add name'
        })
    }

    const nameExists = persons.some(
      person => person.name.toLowerCase() === body.name.toLowerCase()
    )

    if (nameExists) {
        return response.status(400).json({
            error: 'Name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)
    response.json(person)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})