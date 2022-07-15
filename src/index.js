require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const characterRoutes = require('./routes/characters.routes');
const swaggerRoutes = require('./swagger/swagger.route');
const userRoutes = require('./routes/users.routes');
const connectToDataBase = require('./database/database');

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use('/characters', characterRoutes);
app.use('/api-docs', swaggerRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
