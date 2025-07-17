import { Link, useNavigate } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import axios from 'axios';
import { useContext } from 'react';
import { authDataContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

export default function Navbar({ user }) {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  const handleLogout = async () => {
  try {
    await axios.post(
      `${serverUrl}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
    toast.success('Logout Successfully');
    window.location.href = '/';
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

  return (
    <nav
      className="  ticky top-0 flex justify-between items-center shadow-md pr-[2%]"
      style={{
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-primary)',
        padding: '1rem',
        fontFamily: 'var(--ff)',
        fontSize: 'var(--fs-base)',
        lineHeight: 'var(--lh)',
      }}
    >
      <div className="flex items-center gap-4">
        <FaBookmark
          className="cursor-pointer"
          style={{
            fontSize: '1.5rem', // Equivalent to text-2xl
            color: 'var(--color-accent)',
          }}
          onClick={() => navigate('/')}
        />
      </div>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link
              to="/login"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'var(--fs-base)',
                textDecoration: 'none',
              }}
              className="hover:underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'var(--fs-base)',
                textDecoration: 'none',
              }}
              className="hover:underline"
            >
              Sign In
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-primary)',
              fontSize: 'var(--fs-base)',
              cursor: 'pointer',
            }}
            className="hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
