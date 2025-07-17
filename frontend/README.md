
## Features

- **Authentication**: Signup and login forms with password visibility toggle and toast notifications.
- **Bookmark Management**: Form to add URLs, responsive grid to display bookmarks with title, favicon, and expandable summary, and delete functionality.
- **UI/UX**: Tailwind CSS for styling, dark mode support (CSS defined), and React Router for navigation.

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router
- Axios (for API calls)
- react-toastify (for notifications)
- Context API (for state management)



### Light Mode UI
<br/>
<img width="640" height="640" alt="image" src="https://github.com/user-attachments/assets/57df1d69-e070-4d58-94aa-a9b923c13aaa" />

<br/>

### Dark mode UI


<img width="640" height="640"  alt="image" src="https://github.com/user-attachments/assets/73219a9c-43b6-4f61-baf1-8f0df3ffee7e" />
<br/>


### small screen ui 
<br/>
<img width="420" height="640" alt="image" src="https://github.com/user-attachments/assets/91627e5b-1c04-443f-aaa7-9e690b18f42f" />
<br/>

### Login Interface
<br/>
<img width="640" height="640" alt="image" src="https://github.com/user-attachments/assets/e55e0730-835b-45ac-b2df-c18644b53c1d" />
 
# Savinks Frontend

This directory contains the React frontend for the Savinks app, a bookmarking application built for a take-home internship assignment. The frontend provides a responsive, intuitive interface for user authentication and bookmark management, integrating with the Node.js/Express backend.



## File Structure

- `src/`
  - `components/BookmarkCard.jsx`: Displays individual bookmarks with title, favicon, summary, and delete button.
  - `components/Navbar.jsx`: Navigation with login/logout links.
  - `Context/AuthContext.jsx`: Manages `serverUrl` and loading state.
  - `Context/UserContext.jsx`: Fetches and stores user data.
  - `utils/bookmarkApi.js`: API functions for bookmark CRUD.
  - `pages/Login.jsx`, `pages/SignUp.jsx`: Authentication forms.
  - `Home.jsx`: Main page for adding and viewing bookmarks.
  - `index.css`: Global styles with Tailwind and dark mode.
  - `main.jsx`: Entry point with React Router and Context providers.

## Setup Instructions

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Update `serverUrl` in `AuthContext.jsx` to point to the backend (e.g., `http://localhost:8000`).
4. Run the development server:

   ```bash
   npm run dev
   ```
5. Access at `http://localhost:5173` (default Vite port).

## Development Notes

- Built after backend authentication to integrate with `/api/auth` endpoints.
- Bookmark UI added later to support `/api/bookmark` endpoints.
- Uses Tailwind CSS for responsive design and CSS variables for consistent theming.
- Context API manages global state for user data and server URL.

## 

## Time Spent

\~4 hours (authentication UI: 2 hour, bookmark UI: 2  hour).
