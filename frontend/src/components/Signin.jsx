import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PasswordInput from './PasswordInput';
import InputField from './InputField';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Signin failed');
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
      console.error('Error during signin:', error);
      alert('An error occurred during signin');
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSignin}
        className='flex flex-col space-y-4'>
        <h2 className='text-4xl font-semibold mb-4 text-center'>
          Welcome Back
        </h2>

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
          Signin
        </button>
      </form>
    </div>
  );
};

export default Signin;
