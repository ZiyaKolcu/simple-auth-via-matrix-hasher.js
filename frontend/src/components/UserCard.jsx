const UserCard = ({ username, email, onSignout }) => {
  return (
    <div className='max-w-sm mx-auto bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-2'>User Information</h2>
      <p className='text-gray-700'>
        <strong>Username:</strong> {username}
      </p>
      <p className='text-gray-700'>
        <strong>Email:</strong> {email}
      </p>
      <button
        onClick={onSignout}
        className='mt-4 bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600'>
        Sign Out
      </button>
    </div>
  );
};

export default UserCard;
