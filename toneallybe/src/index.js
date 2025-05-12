const express = require('express');
const progRoutes = require('./routes/progRoutes');
const cors = require('cors');

const app = express();
const expressPort =  4000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use('/prog', progRoutes);

app.listen(expressPort, () => {
  console.log(`Server is running on port ${expressPort}`);
});