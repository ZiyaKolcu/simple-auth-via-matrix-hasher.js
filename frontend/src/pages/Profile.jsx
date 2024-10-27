import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import notifyImg from '../assets/notify.svg';
import UserCard from '../components/UserCard';

function Profile() {
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/signout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        signout();
        navigate('/');
      } else {
        alert('Signout failed');
      }
    } catch (error) {
      console.error('Error during signout:', error);
      alert('An error occurred during signout');
    }
  };

  if (!user)
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <img
          src={notifyImg}
          alt='not authenticated'
          className='h-auto mb-4 rounded-lg shadow-lg sm:w-1/2 md:w-1/4'
        />
        <h2 className='text-3xl font-semibold text-rose-500'>
          Not Authenticated
        </h2>
      </div>
    );

  return (
    <div className='flex justify-center items-center bg-gray-100 h-screen'>
      <UserCard
        username={user.username}
        email={user.email}
        onSignout={handleSignout}
      />
    </div>
  );
}

export default Profile;
