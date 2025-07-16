import { Link, redirect, useNavigate } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import axios from 'axios';
import { useContext } from 'react';
import { authDataContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

export default function Navbar({ user }) {
  const navigate = useNavigate();
  let {serverUrl}= useContext(authDataContext)

  const handleLogout = async () => {
    try {
      await axios.post(serverUrl+"/api/auth/logout",
        {},
        {
          withCredentials: true, // Important to send the cookie
        }
       
      );
      navigate('/');
      toast.success("Logout Successfully")
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="sticky top-0 bg-[var(--color-secondary)] text-[var(--color-primary)] p-4 flex justify-between items-center shadow-md pr-[2%]">
      <div className="flex items-center gap-4">
        <FaBookmark className="text-2xl cursor-pointer" onClick={() => navigate('/')} />
      </div>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="text-[var(--fs-base)] hover:underline">Login</Link>
            <Link to="/signup" className="text-[var(--fs-base)] hover:underline">Sign In</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="text-[var(--fs-base)] cursor-pointer hover:underline">Logout</button>
        )}
      </div>
    </nav>
  );
}
