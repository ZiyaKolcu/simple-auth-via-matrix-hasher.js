import authImg from '../assets/auth_image.svg';

function Home() {
  return (
    <div className='flex flex-col items-center bg-gray-100 h-screen'>
      <h1 className='mt-20 text-4xl font-bold text-gray-800'>
        Welcome to Simple Auth Project
      </h1>
      <img
        src={authImg}
        alt='Authentication Illustration'
        className='h-auto mt-10 rounded-lg shadow-lg sm:w-1/2 md:w-1/4'
      />
      <div className='mt-10'>
        <p className='text-center text-gray-800 text-lg'>
          The MERN stack application was developed by Ziya Kolcu. The purpose of
          the application is to demonstrate the usage of the Matrix-Hasher.js
          library developed by Ziya Kolcu.
        </p>
      </div>
    </div>
  );
}

export default Home;
