// resources/js/Pages/UserTest.jsx

import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

const UserTest = () => {
  const { userId } = usePage().props; // Access the 'userId' prop provided by Inertia.js

  return (
    <div>
      <h1>User ID: {userId}</h1>
      {/* Other content of your UserTest page */}
    </div>
  );
};

export default UserTest;
