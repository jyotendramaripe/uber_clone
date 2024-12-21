const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDb= require('./db/db');
const userRoutes= require('./routes/user.routes')
connectToDb();

const app = express();
app.use(cors());



app.get('/', (req, res) => {
  res.send('hello world!');
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRoutes)

module.exports = app;
