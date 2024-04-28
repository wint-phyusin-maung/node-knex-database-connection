const userModel = require('../models/user');


module.exports = {
    createUser: async (req, res) => {
        const { name, email } = req.body;
        try {
            await userModel.createUser(name, email);
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error: error.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error: error.message });
        }
    }
}

