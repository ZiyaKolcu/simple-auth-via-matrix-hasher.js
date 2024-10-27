import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-800 text-white'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <div className='text-lg font-bold'>SimpleAuth</div>
        <div className='space-x-4'>
          <Link
            to='/'
            className='hover:text-gray-100'>
            Home
          </Link>
          <Link
            to='/auth'
            className='hover:text-gray-100'>
            Auth
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
