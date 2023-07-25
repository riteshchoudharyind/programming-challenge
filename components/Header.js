// components/Header.js
import Link from 'next/link';
import { useAuth } from '../auth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className=''>
      <div className='container'>
      <nav className='row d-inline-block py-4'>
        <Link href="/" className='text-light nav-item'>
          Home
        </Link>
        {user ? (
          <>
            <Link href="/add-post" className='text-light nav-item'>
              Add Post
            </Link>
            <button onClick={logout} className='absolute right-0 logoutBtn'>Logout</button>
          </>
        ) : (
          <Link href="/login"  className='text-light nav-item'>
            Login 
          </Link>
        )}
      </nav>
      </div>
    </header>
  );
};

export default Header;