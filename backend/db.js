const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://carpediem:carpediem@carpediems.yoegmfu.mongodb.net/?retryWrites=true&w=majority`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connected to database")).catch((err) => { console.log(err.message) });
}

module.exports = connectToMongo;