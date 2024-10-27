import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PasswordInput from './PasswordInput';
import InputField from './InputField';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Signup failed');
        return;
      }

      const profileResponse = await fetch(
        'http://localhost:3000/api/v1/profile',
        {
          method: 'GET',
          credentials: 'include',
        }
      );

      if (profileResponse.ok) {
        const userData = await profileResponse.json();
        signin(userData);
        navigate('/profile');
      } else {
        alert('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup');
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSignup}
        className='flex flex-col space-y-4'>
        <h2 className='text-4xl font-semibold mb-4 text-center'>Welcome</h2>

        <InputField
          id='username'
          label='Username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          required
        />

        <InputField
          id='email'
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />

        <PasswordInput
          password={password}
          setPassword={setPassword}
        />

        <button
          type='submit'
          className='p-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition'>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
