const express = require('express');
const progRoutes = require('./routes/progRoutes');
const scaleRoutes = require('./routes/scaleRoutes');
const cors = require('cors');

const app = express();
const expressPort =  4000;

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/prog', progRoutes);
app.use('/scale', scaleRoutes);

app.listen(expressPort, () => {
  console.log(`Server is running on port ${expressPort}`);
});