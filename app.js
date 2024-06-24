const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev')); // Logger
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor rodando na porta 3000');
});

// Manipulador de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
