const express = require('express');
const cors = require('cors');
const Users = require('./routers/usersRoute');
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/v1/users", Users);

module.exports = app;