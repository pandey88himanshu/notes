Notes App
Live URL
Notes App

Description
The Notes App allows users to create, read, update, and delete notes. It includes user authentication using JWT tokens. The app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional state management and API handling using Redux Toolkit and RTK Query.

Features
User Authentication
Login and Signup Functionality: Users can sign up and log in.
User Data: Includes name, email, and password.
JWT Tokens: Used for authentication, passed through headers.
Notes Management
Note Attributes: Each note has a title, body text, and created date and time.
CRUD Operations: Users can create, read, update, and delete notes.
Access Control: CRUD operations are restricted to authenticated users only.
Frontend
Framework: React.js.
State Management: Redux Toolkit and RTK Query.
User Data Management: Uses a userSlice in Redux to manage logged-in user data and caches it to prevent data loss on tab close.
Optimistic Updates (Optional): Implemented using RTK Query for better user experience.
Detailed Requirements
Backend
Server: Express.js.
Database: MongoDB.
Authentication Middleware: Protects routes.
APIs:
POST /signup - Sign up a new user.
POST /login - Authenticate a user and return a JWT token.
GET /notes - Retrieve all notes for the authenticated user.
POST /notes - Create a new note.
PUT /notes/:id - Update an existing note.
DELETE /notes/:id - Delete a note.
Frontend
React App Pages:
Login
Signup
Notes List
Note Detail/Edit
State Management: Redux Toolkit.
API Requests and Caching: RTK Query.
User Data Caching: Ensures the userSlice caches user data to local storage or another persistent storage solution.
Optimistic Updates: Implemented for seamless user experience.
