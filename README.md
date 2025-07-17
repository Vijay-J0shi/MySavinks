# Savinks: Link Saver + Auto-Summary

**Website Link** -  https://savinks.onrender.com/
<br/>
**Backend Link** - https://mysavinks.onrender.com/

Savinks is a full-stack bookmarking application built for a take-home internship assignment. It allows users to sign up, log in, save bookmarks with auto-generated summaries using the Jina AI API, and manage their bookmarks in a responsive interface. The app demonstrates clean code, modular design, and thoughtful UI/UX, meeting all must-have user stories from the assignment.

## Project Overview

Savinks enables users to:

- **Sign Up/Login/Logout**: Create accounts and authenticate securely with JWT cookies.
- **Save Bookmarks**: Paste a URL to fetch and store its title, favicon, and summary (via Jina AI).
- **List & View Bookmarks**: Display bookmarks in a responsive grid with expandable summaries and delete functionality.
- **Nice-to-Have**: Partial dark mode support (CSS defined, toggle pending).

The app is split into a Node.js/Express backend and a React frontend, with MongoDB for data storage and Vitest for backend testing.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios, react-toastify
- **Backend**: Node.js, Express, MongoDB/Mongoose, bcryptjs, jsonwebtoken, node-fetch, cheerio, validator
- **Testing**: Vitest, @shelf/jest-mongodb (backend)
- **Deployment**: (e.g., Vercel for frontend, Render for backend, pending deployment)

## Development Phases

The project was developed in iterative phases with logical Git commits:

1. **Backend Authentication**: Built Express server with MongoDB, JWT, and routes for signup, login, and logout.
2. **Frontend Authentication**: Created React components (`Login.jsx`, `SignUp.jsx`, `Navbar.jsx`) with API integration.
3. **Backend Bookmarking**: Added bookmark routes with Jina AI summary fetching, title/favicon extraction, and error handling.
4. **Frontend Bookmarking**: Implemented `Home.jsx` and `BookmarkCard.jsx` for adding, listing, and deleting bookmarks.
5. **Backend Testing**: Added Vitest unit tests for `signUp` and `addBookmark`, covering success and error cases.

Each phase was committed separately to the Git repository, ensuring a clear development history.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repo-url>
   ```
2. **Backend Setup**:
   - Navigate to `backend/`.
   - Install dependencies: `npm install`.
   - Create `.env` with:

     ```env
     PORT=8000
     MONGODB_URL=<your-mongodb-url>
     JWT_SECRET=<your-secret>
     ```
   - Run: `npm run dev`.
   - See `backend/README.md` for details.
3. **Frontend Setup**:
   - Navigate to `frontend/`.
   - Install dependencies: `npm install`.
   - Update `serverUrl` in `AuthContext.jsx` to `http://localhost:8000`.
   - Run: `npm run dev`.
   - See `frontend/README.md` for details.
4. **Run Tests** (backend):
   - In `backend/`, run: `npm test`.

## Time Spent

Approximately 5 hours:

- Backend: \~4 hours (authentication, bookmarking, testing).
- Frontend: \~ 4-5 hours (auth UI, bookmark UI).


### frontend Images
<br/>
<img width="420" height="640" alt="image" src="https://github.com/user-attachments/assets/adb14955-aa9e-407c-ab21-de221ae58a45" />
<br/>
<img width="640" height="640" alt="image" src="https://github.com/user-attachments/assets/e4ff4cca-9bde-4e97-8e3a-9227b8c0aaf8" />



## Additional Notes

- The backend includes robust error handling for Jina AI (rate limits, downtime) with a fallback summary.
- The frontend uses Tailwind CSS for responsive, clean UI/UX.
- Detailed setup and implementation notes are in `frontend/README.md` and `backend/README.md`.
