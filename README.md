# daily-thoughts-api

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

Daily Thoughts API is an API for social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.  This project was built to understand and practice how to build and structure an API using Express.js for routing, a MongoDB database, and the Mongoose ODM.  It solves the problem of wanting an API for a social network that uses a NoSQL database so that a website can handle large amounts of unstructured data.  Some things learned throughout Daily Thoughts API are that embedded documents can be used to create one-to-one and one-to-many relationships, arrays of subdocuments can be created without making a new model, virtuals can be added to schema's to create virtual properties for models, the populate() method is an extremely useful tool for referencing documents in other collections, and the Non-relational or distributed MongoDB database helps overcome issues and limitations of SQL databases.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

Within the main directory, install dependencies by running "npm i' within the terminal of the main directory.  Then, connect to the MongoDB database and start the server with the command "npm run start."  This will allow routes to be tested within Insomnia.

## Usage

To run this application from the terminal, enter "npm run start" to start the server.  The message "API server running on port 3001!" will display within the console denoting the Mongoose models are synced to the MongoDB database.  Open up Insomnia and create folders for Users, Thoughts, Reactions, and Friends to keep the API endpoints organized.  In the url for each method, use http://localhost:3001 with all of the following API endpoints.

**API Endpoints:**

All endpoints must include the necessary paramaters or requests within the body.

1. GET /api/users - Find all Users

2. GET /api/users/:userId - Find a single user by its _id and populated thought and friend data
3. POST /api/users - Create a User
4. PUT /api/users/:userId - Update a User by its _id
5. DELETE /api/users/:userId - Remove a User by its _id
6. GET /api/thoughts/ - Find all Thoughts
7. GET /api/thoughts/:thoughtId - Find a single thought by its _id
8. POST /api/thoughts/ - Create a new thought and associate it with a user
9. PUT /api/thoughts/:thoughtId - Update a thought by its _id
10. DELETE /api/thoughts/:thoughtId - Remove a thought by its _id
11. POST api/thoughts/:thoughtId/reactions/ - Create a reaction stored in a single thought's reactions array field
12. DELETE api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction by the reaction's reactionId value
13. POST /api/users/:userId/friends/:friendId - Add a friend to the user's friend list
14. DELETE /api/users/:userId/friends/:friendId - Remove a friend from the user's friend list

**Attached is a screenshot of the GET Find all Users endpoint within Insomnia:**

![Insomnia GET Find all Users endpoint](/public/images/Daily%20Thoughts%20API%20Insomnia%20Endpoints.png)

**Attached is a screenshot of the GET Find all Thoughts endpoint within Insomnia:**

![Insomnia GET Find all Thoughts endpoint](/public/images/Daily%20Thoughts%20API%20Insomnia%20Endpoints(2).png)

## Video

[Daily Thoughts API](https://screenrec.com/share/loBCgm3Pd5)

## Deployed Site

N/A

## Credits

[SQL to MongoDB Mapping Chart - MongoDB Manual](https://www.mongodb.com/docs/manual/reference/sql-comparison/)

[Introduction to Mongoose for MongoDB](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

[Mongoose v8.2.4: Queries](https://mongoosejs.com/docs/queries.html)

[Mongoose v8.2.4: Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html)

[Mongoose v8.2.4: Populate](https://mongoosejs.com/docs/populate.html)

[Data Modeling - MongoDB Manual](https://www.mongodb.com/docs/manual/data-modeling/#link-related-data)

[db.collection.drop() - MongoDB Manual](https://www.mongodb.com/docs/manual/reference/method/db.collection.drop/#mongodb-method-db.collection.drop)

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

Node.js, npm (node package manager), express.js 4.19.2, express-handlebars 7.1.2, nodemon 3.1.0, NoSQL, MongoDB, Mongoose 8.2.3, Insomnia Core 8.6.1

## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.