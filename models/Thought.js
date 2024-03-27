const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            // The type of data is set to 'String'
            type: String,
            // Setting required to true will disallow null values
            required: true,
            // Minimum of 1 character
            minLength: 1,
            // Maximum of 280 characters
            maxLength: 280,
        },
        createdAt: {
            // Sets data type to Date
            type: Date,
            // Sets default value of createdAt to the current date and time when new document is created
            default: Date.now(),
            // Getter function for taking the raw timestamp stored in the database and formats it using the dateFormat function.
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        // Array of nested documents created with the reactionSchema
        reactions: [reactionSchema],
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDB: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior.
        toJSON: {
            // Tells Mongoose to apply any getter functions defined in schema to the data before converting it to JSON
            getters: true,
            // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
            virtuals: true,
        },
        // Tells Mongoose not to create a virtual id property on the documents
        id: false,
    }
);

// Create a virtual property 'reactionCount' that gets the ammount of reactions associated with a thought
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

// Initializes Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;