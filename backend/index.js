const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rodrigo:gqwabc123@rodrigo-jrnk3.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Omnistack' });
});

app.listen(3333);