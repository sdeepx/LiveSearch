const express = require('express');
const {
    createUsers,
    getUser
} = require("../controller/users");

const router = express.Router();

router.route("/").post(getUser);
router.route("/create").post(createUsers)

module.exports = router;