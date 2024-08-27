Description
This is a Social Network API built using Node.js, Express.js, and MongoDB with Mongoose. The API allows users to share thoughts, react to friends’ thoughts, and manage a list of friends. It provides full CRUD functionality for users and thoughts, as well as the ability to add and remove friends and reactions.

Table of Contents
Installation
Usage
API Routes
Technologies
License
Contributing
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/social-network-api.git
Navigate to the project directory:

bash
Copy code
cd social-network-api
Install the dependencies:

bash
Copy code
npm install
Ensure you have MongoDB installed and running locally. If MongoDB isn't running, start it:

bash
Copy code
mongod
Create a .env file in the root directory and add your MongoDB connection string (if using MongoDB Atlas, otherwise default is mongodb://localhost:27017/socialNetworkDB):

arduino
Copy code
MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
Usage
Start the server:

bash
Copy code
npm start
Use Insomnia or Postman to test the following API routes.

API Routes
Users
GET /api/users: Get all users.
GET /api/users/:userId: Get a single user by ID.
POST /api/users: Create a new user.
json
Copy code
{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
}
PUT /api/users/:userId: Update a user by ID.
DELETE /api/users/:userId: Delete a user by ID and remove associated thoughts.
Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
Thoughts
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:thoughtId: Get a single thought by ID.
POST /api/thoughts: Create a new thought and push it to the user's thoughts array.
json
Copy code
{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
}
PUT /api/thoughts/:thoughtId: Update a thought by ID.
DELETE /api/thoughts/:thoughtId: Delete a thought by ID.
Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
json
Copy code
{
    "reactionBody": "This is a reaction!",
    "username": "lernantino"
}
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction by ID.
Technologies
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
Insomnia/Postman: API testing.
License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.