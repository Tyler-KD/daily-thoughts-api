const { User } = require('../models');

module.exports = {
    
    // GET all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET a single user by its _id and populated thought and friend data
    async getSingleUser(req, res) {
        try {
            // Find a user in the database based on ID provided in request parameters
            const user = await User.findOne({ _id: req.params.userId })
            // The select('-__v') is used to exclude the __v field from the result
            .select('-__v')
            // The populate() is used to replace the specified paths in the document's result ('thoughts' and 'friends'), with documents from other collections.
            .populate('thoughts').populate('friends');
        // If no user is found with ID, it sends a 404 status code
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        // If a user is found, it sends the user data as a JSON response
        res.json(user);
        } catch (err) {
            // If there is an error during the process, return 500 status code (Internal Server Error) and error message
            res.status(500).json(err);
        }
    },

    // POST a new user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PUT to update a user by its _id
    async updateUser(req, res) {
        try {
            // Find a user in the database with the ID provided and update it
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                // The $set operator replaces the value of a field with the specified value
                { $set: req.body },
                // The runValidators option ensures that the update operation validates the update operation against the model's schema.
                // The new option, when true, returns the modified document rather than the original.
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove a user by its _id
    async deleteUser(req, res) {
        try {
            // Find a user in the database with the ID provided in the request parameters and remove that user from the database
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            
            if (!user) {
                return res.status(404).json({ message: 'No such user exists' })
            }

            res.json({ message: 'User successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}