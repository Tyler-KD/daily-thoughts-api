const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomFriend, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);


/**
 * connection to db
 * - create X users with Y thoughts
 * - loop through X users
 * - - Determine random number of friends Z
 * - - Add Z friends to user (where friends are not current user ID)
 * - ends user loop
 * - loop through A thoughts
 * - - deterine random number of reactions B
 * - - Add B reactions to thought
 * - end thought loop
 */

// connection.once('open', async () => {
//     console.log('connected');
//     // Delete the collections if they exist
//     let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
//     if (thoughtCheck.length) {
//         await connection.dropCollection('thoughts');
//     }

//     let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
//     if (userCheck.length) {
//         await connection.dropCollection('users');
//     }

//     const users = [];
//     const thoughts = getRandomThoughts(10);
    

//     for (let i = 0; i < 20; i++) {
//         const friends = [];
//         const username = getRandomUsername();
//         const email = getRandomEmail();
//         for (let i = 0; i < 20; i++) {
//             const friend = getRandomFriend();
//             friends.push(friend)
//         }

//         users.push({
//             username,
//             email,
//             friends,
//         });
//     }

//     await User.collection.insertMany(users);
//     await Thought.collection.insertMany(thoughts);

//     // loop through the saved thoughts, for each thought we need to generate a thought reaction
//     console.table(users);
//     console.table(thoughts);
//     console.info('Seeding complete!');
//     process.exit(0);
// });