# Notes App

## Live URL
[Notes App](https://notes-frontend-lyart-two.vercel.app/)

## Description
The Notes App allows users to create, read, update, and delete notes. It includes user authentication using JWT tokens. The app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional state management and API handling using Redux Toolkit and RTK Query.

## Features

### User Authentication
- **Login and Signup Functionality**: Users can sign up and log in.
- **User Data**: Includes name, email, and password.
- **JWT Tokens**: Used for authentication, passed through headers.

### Notes Management
- **Note Attributes**: Each note has a title, body text, and created date and time.
- **CRUD Operations**: Users can create, read, update, and delete notes.
- **Access Control**: CRUD operations are restricted to authenticated users only.

### Frontend
- **Framework**: React.js.
- **State Management**: Redux Toolkit and RTK Query.
- **User Data Management**: Uses a `userSlice` in Redux to manage logged-in user data and caches it to prevent data loss on tab close.
- **Optimistic Updates** (Optional): Implemented using RTK Query for better user experience.

## Detailed Requirements

### Backend
- **Server**: Express.js.
- **Database**: MongoDB.
- **Authentication Middleware**: Protects routes.
- **APIs**:
  1. `POST /signup` - Sign up a new user.
  2. `POST /login` - Authenticate a user and return a JWT token.
  3. `GET /notes` - Retrieve all notes for the authenticated user.
  4. `POST /notes` - Create a new note.
  5. `PUT /notes/:id` - Update an existing note.
  6. `DELETE /notes/:id` - Delete a note.

### Frontend
- **React App Pages**:
  - Login
  - Signup
  - Notes List
  - Note Detail/Edit
- **State Management**: Redux Toolkit.
- **API Requests and Caching**: RTK Query.
- **User Data Caching**: Ensures the `userSlice` caches user data to local storage or another persistent storage solution.
- **Optimistic Updates**: Implemented for seamless user experience.

## Setup and Run Instructions

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository: `git clone https://github.com/pandey88himanshu/notes.git`
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file and add your MongoDB URI and JWT secret:
5.  Start the server: `npm start`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Running the App
1. Ensure MongoDB is running.
2. Start the backend and frontend servers.
