const server = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
    path: "./config/config.env"
});

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);

const connection = async () => {
    try {
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

    } catch (err) {
        console.log(err);
    }
}

connection()


server.listen(4040, () => console.log("Server running on http://127.0.0.1:4040"));