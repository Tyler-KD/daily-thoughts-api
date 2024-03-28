const { Thought, User } = require('../models');

module.exports = {

    // GET to get all thoughts
    async getThoughts(req, res) {
        try {            
            const thoughts = await Thought.find()
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // GET to get a single thought by its _id
    async getSingleThought(req, res) {
        try {
            // Find a thought in the database based on ID provided in request parameters
            const thought = await Thought.findOne({ _id: req.params.thoughtId })            
            // If no thought is found with ID, it sends a 404 status code
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            // If a thought is found, it sends the user data as a JSON response
            res.json(thought);
        } catch (err) {
            // If there is an error during the process, return 500 status code (Internal Server Error) and error message
            res.status(500).json(err);
        }
    },

    // POST to create a new thought and associates it with a user
    async createThought(req, res) {
        try {
            // Creates a new thought in the database
            const thought = await Thought.create(req.body);
            // Finds a user in the database with an ID that matches req.body.userID and updates that user's thoughts array
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                // Adds ID of newly created thought to user's thoughts array
                { $addToSet: { thoughts: thought._id } },
                // Return updated document
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json('Thought was successfully created');
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // PUT to update a thought by its _id
    async updateThought(req, res) {
        try {
            // Find a thought in the database with the ID provided and update it
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                // The $set operator replaces the value of a field with the specified value
                { $set: req.body },
                // The runValidators option ensures that the update operation validates the update operation against the model's schema.
                // The new option, when true, returns the modified document rather than the original.
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);
        } catch (err) {
           res.status(500).json(err); 
        }
    },

    // DELETE to remove a thought by its _id
    async deleteThought(req, res) {
        try {
            // Find a thought in the database with the ID provided and delete it
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            // Finds a user in the database with an ID that matches req.body.userID and updates that user's thoughts array
            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                // Removes that thought ID from the user's thoughts array
                { $pull: { thoughts: req.params.thoughtId } },
                // Returns updated document
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'Thought deleted but no user with this id!' })
            }

            res.json('Thought was successfully deleted');
        } catch {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // POST to create a reaction stored in a single thought's reactions array field
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to pull and remove a reaction by the reaction's reactionId value
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' })
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}