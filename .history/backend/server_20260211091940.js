const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//init app express
const app =express();

//middleware
app.use(cors());//allow cross-origin requests between frontend and backend
app.use(express.json());//parse incoming JSON request bodies

//connect to MongoDB
mongoose.connect('mongo')