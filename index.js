const express = require('express');
const app = express();
require('dotenv').config();
const createError = require('http-errors');
const cors = require('cors');
const helmet = require('helmet');
const mainRouter = require('./src/routes/index');
const xss = require('xss-clean');

// App
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use('/img', express.static('src/upload'));
const port = 4000;
app.use('/', mainRouter);

app.all('*', (req, res, next) => {
  next(new createError.NotFound());
});
app.use((err, req, res, next) => {
  const messageError = err.message || 'internal server error';
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: messageError,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
