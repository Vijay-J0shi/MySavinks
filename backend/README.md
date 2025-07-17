Savinks Backend
This directory contains the Node.js/Express backend for the Savinks app, a bookmarking application built for a take-home internship assignment. The backend handles user authentication, bookmark management, and URL metadata extraction with Jina AI.
Features

Authentication: Signup, login, and logout with JWT cookies and password hashing (bcryptjs).
Bookmark Management: Add, list, and delete bookmarks with title, favicon, and Jina AI summary.
Testing: Unit tests for signUp and addBookmark using Vitest.

Tech Stack

Node.js
Express
MongoDB/Mongoose
bcryptjs (password hashing)
jsonwebtoken (JWT)
node-fetch, cheerio (URL metadata)
validator (URL validation)
Vitest, @shelf/jest-mongodb (testing)

File Structure

config/
db.js: MongoDB connection.
token.js: JWT generation.


controllers/
auth.controller.js: Handles signup, login, logout.
bookmark.controller.js: Manages bookmark CRUD.
user.controller.js: Fetches current user.


middleware/isAuth.js: JWT authentication middleware.
models/
bookmark.model.js: Bookmark schema.
user.model.js: User schema.


routes/
auth.routes.js, bookmark.route.js, user.route.js: API endpoints.


__tests__/
auth.controller.test.js: Tests for signUp.
bookmark.controller.test.js: Tests for addBookmark.


index.js: Main server entry point.
package.json: Dependencies and scripts.

Setup Instructions

Navigate to the backend directory:
cd backend


Install dependencies:
npm install


Create .env with:
PORT=8000
MONGODB_URL=<your-mongodb-url>
JWT_SECRET=<your-secret>


Run the development server:
npm run dev


Run tests:
npm test



Development Notes

Built first with authentication routes and MongoDB setup.
Added bookmark routes with Jina AI integration and error handling (rate limits, fallback summary).
Implemented unit tests for signUp and addBookmark to cover success and error cases.
Uses validator for URL validation and cheerio for metadata extraction.

Time Spent
~3 hours (authentication: 1.5 hours, bookmarking: 1 hour, testing: 0.5 hours).