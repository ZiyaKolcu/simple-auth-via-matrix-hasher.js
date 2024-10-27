import NotFoundImg from '../assets/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <img
        src={NotFoundImg}
        alt='404 Not Found'
        className='w-96 h-72 object-contain'
      />
      <h1 className='text-4xl font-bold text-gray-800 mt-6'>Page Not Found</h1>
      <p className='text-gray-600 mt-2'>
        The page you are looking for does not exist.
      </p>
      <Link
        to='/'
        className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
