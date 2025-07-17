Savinks Frontend
This directory contains the React frontend for the Savinks app, a bookmarking application built for a take-home internship assignment. The frontend provides a responsive, intuitive interface for user authentication and bookmark management, integrating with the Node.js/Express backend.
Features

Authentication: Signup and login forms with password visibility toggle and toast notifications.
Bookmark Management: Form to add URLs, responsive grid to display bookmarks with title, favicon, and expandable summary, and delete functionality.
UI/UX: Tailwind CSS for styling, dark mode support (CSS defined), and React Router for navigation.

Tech Stack

React (Vite)
Tailwind CSS
React Router
Axios (for API calls)
react-toastify (for notifications)
Context API (for state management)

File Structure

src/
components/BookmarkCard.jsx: Displays individual bookmarks with title, favicon, summary, and delete button.
Context/AuthContext.jsx: Manages serverUrl and loading state.
Context/UserContext.jsx: Fetches and stores user data.
utils/bookmarkApi.js: API functions for bookmark CRUD.
Login.jsx, SignUp.jsx: Authentication forms.
Home.jsx: Main page for adding and viewing bookmarks.
Navbar.jsx: Navigation with login/logout links.
index.css: Global styles with Tailwind and dark mode.
main.jsx: Entry point with React Router and Context providers.



Setup Instructions

Navigate to the frontend directory:
cd frontend


Install dependencies:
npm install


Update serverUrl in AuthContext.jsx to point to the backend (e.g., http://localhost:8000).

Run the development server:
npm run dev


Access at http://localhost:5173 (default Vite port).


Development Notes

Built after backend authentication to integrate with /api/auth endpoints.
Bookmark UI added later to support /api/bookmark endpoints.
Uses Tailwind CSS for responsive design and CSS variables for consistent theming.
Context API manages global state for user data and server URL.


Time Spent
~4 hours (authentication UI: 2 hour, bookmark UI: 2  hour).