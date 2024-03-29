const usernames = [
    'daft01',
    'rizzler',
    'vesper94',
    'Camus3',
    'Otho',
    'Carmilla',
    'Sita',
    'AccioForest',
    'ominous',
    'mattyB',
];

const emails = [
    'sora@gmail.com',
    'maker34@gmail.com',
    'bard04@gmail.com',
    'xenomorph@gmail.com',
    'covenent09@gmail.com',
    'asher01@gmail.com',
    'gemini58@gmail.com',
    'qbert23@gmail.com',
    'powerball@gmail.com',
    'darkcellar@gmail.com',
];

const possibleThoughts = [
    "Here's a cool Thought...",
    "Life begins at the end of your comfort zone",
    "Thoughts are the words of our minds",
    "Learn to accept yourself",
    "20% of your input accounts for 80% of your output",
    "Take the unbeaten path",
    "Face your fears head on",
    "Try to put yourself in others' shoes",
    "Embrace technology and adapt with it",
    "Everyone can learn with a growth mindset",
];

const possibleReactions = [
    "This is a great thought!",
    "I agree wholeheartedly with you",
    "Thought of the day!",
    "Cool thought!  Keep them coming!",
    "I'd love to hear more on your thoughts",
    "Fantastic!",
    "This made my day",
    "You are inspiring",
    "Love this!",
    "You've opened up my mind",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () => `${getRandomArrItem(usernames)}`;

// Gets a random email
const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Gets a random friend
const getRandomFriend = () => {
    const randomItem = getRandomArrItem(usernames);
    console.log(usernames)
    return randomItem
};

// Function to generate random thoughts that can be added to the database.  Includes thought reactions.
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(possibleThoughts),
            username: getRandomUsername(),
            reactions: [...getThoughtReactions(3)],
        });
    }
    return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(possibleReactions),
            username: getRandomUsername(),
        });
    }
    return results;
};

module.exports = { getRandomUsername, getRandomEmail, getRandomFriend, getRandomThoughts };