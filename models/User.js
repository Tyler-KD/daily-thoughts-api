const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            // The type of data is set to 'String'
            type: String,
            // Ensures that username value is unique to database (No two documents in the collection can have the same username)
            unique: true,
            // Setting required to true will disallow null values
            required: true,
            // Automatically trims any leading or trailing whitespace from the username
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // Regular expression for matching a valid email address
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        // Array of _id values referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        // Array of _id values referencing the User model (self-reference)
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],        
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDB: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior.
        toJSON: {
            // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
            virtuals: true,
        },
        // Tells Mongoose not to create a virtual id property on the documents
        id: false,
    }
);

// Create a virtual property 'friendCount' that gets the ammount of friends associated with a user
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    });

// Initializes User model
const User = model('user', userSchema);

module.exports = User;