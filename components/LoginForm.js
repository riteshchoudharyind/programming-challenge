// components/LoginForm.js
import { useState } from 'react';
import { useAuth } from '../auth';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., validate credentials and set user)
    login({ email, password }); // Pass both email and password
    router.push('/');
  };

  return (
    <div className='loginpage d-flex align-items-center justify-content-center'>
    <div className='loginBox'>
      <h1 className='w-100 text-center'>Login</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column loginForm'>
        <input className=''
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit"  className='loginBtn'>Login</button>
      </form>
    </div>
    </div>
  );
}