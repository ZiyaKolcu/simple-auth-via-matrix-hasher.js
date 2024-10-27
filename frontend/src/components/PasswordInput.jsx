import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordInput({ password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col'>
      <label
        className='mb-1 text-gray-700'
        htmlFor='password'>
        Password
      </label>
      <div className='relative'>
        <input
          id='password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10'
          required
        />
        <button
          type='button'
          onClick={togglePasswordVisibility}
          className='absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none'>
          {showPassword ? (
            <FaEyeSlash className='w-5 h-5 text-gray-600' />
          ) : (
            <FaEye className='w-5 h-5 text-gray-600' />
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
