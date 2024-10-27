import { useState } from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
        <div className='flex justify-between mb-6'>
          <button
            className={`w-1/2 text-center py-2 ${
              isSignup ? 'border-b-2 border-teal-500' : ''
            }`}
            onClick={() => setIsSignup(true)}>
            Signup
          </button>
          <button
            className={`w-1/2 text-center py-2 ${
              !isSignup ? 'border-b-2 border-teal-500' : ''
            }`}
            onClick={() => setIsSignup(false)}>
            Signin
          </button>
        </div>

        {isSignup ? <Signup /> : <Signin />}
      </div>
    </div>
  );
};

export default Auth;
