require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const routes = require('./routes/characters.routes');
const swaggerRoute = require('./swagger/swagger.route');
const connectToDataBase = require('./database/database');

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use('/characters', routes);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
