const express = require('express');
const app = express();
const cors = require('cors');
const songRouter = require('./routes/song.route');

//express server

app.use(express.json());
app.use(cors());
app.use('/songs',songRouter)



//path not found
app.use((req, res, next) => {
    next(new Error('Not found'));
  });

module.exports  = app;