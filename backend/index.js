const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const authRouter = require(`${__dirname}/routes/authRoutes`);

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Authentication routes
app.use('/api/auth', authRouter);


app.listen(port, ()=> {
    console.log(`server listening at http://localhost:${port}`);
});