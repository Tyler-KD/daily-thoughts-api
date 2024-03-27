const { Schema, Types } = require('mongoose');

// Schema to create Reaction subdocument within Thoughts model
const reactionSchema = new Schema(
    {
        reactionId: {
            // Use Mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            // Default value is set to a new ObjectId
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            // Sets data type to Date
            type: Date,
            // Sets default value of createdAt to the current date and time when new document is created
            default: Date.now(),
            // Getter function for taking the raw timestamp stored in the database and formats it using the dateFormat function.
            get: (timestamp) => dateFormat(timestamp),
        },
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDB: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior.
        toJSON: {
            // Tells Mongoose to apply any getter functions defined in schema to the data before converting it to JSON
            getters: true,
        },
        // Tells Mongoose not to create a virtual id property on the documents
        id: false,
    }
)

module.exports = reactionSchema;