const Users = require('../model/usersModel');

exports.createUsers = async (req, res) => {
    try {

        const user = await Users.create(req.body);

        res.status(201).json({
            message: "Sucess",
            user
        });

    } catch (err) {
        res.status(404).json({
            message: "User not created"
        });
    }
}

exports.getUser = async (req, res) => {
    try {
        if (req.query.name.length !== 0) {
            console.log(req.query.name);
            const users = await Users.find({
                $or: [{
                    name: {
                        $regex: `^${req.query.name}`,
                        $options: "i"
                    }
                }, {
                    name: req.query.name
                }]

            }, {
                name: 1,
                _id: 0
            });
            if (users.length !== 0) {
                res.status(200).json({
                    message: "success",
                    users
                });
            } else {
                res.status(200).json({
                    message: "User not found",

                });
            }
        }
    } catch (err) {
        res.status(404).json({
            message: "User not found"
        });
    }
}