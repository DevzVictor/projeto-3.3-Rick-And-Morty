const mongoose = require('mongoose');

const connectToDataBase = () => {
  mongoose
    .connect(
      process.env.URI_DATABASE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MongoDB conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB Atlas, Erro: ${error}`),
    );
};

module.exports = connectToDataBase;
