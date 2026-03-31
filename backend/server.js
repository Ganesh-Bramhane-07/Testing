const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//init app express
const app =express();

//middleware
app.use(cors());//allow cross-origin requests between frontend and backend
app.use(express.json());//parse incoming JSON request bodies

//testing PR
//Pull Request Testing
//test route

app.get('/',(req,res)=>{
res.send('Hello from the backend!')
})

//connect to server

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
