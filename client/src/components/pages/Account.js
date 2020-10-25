import React from 'react';
import '../../App.css';
import '../Account.css'

function Account({user}) {

  return (
      <div className='account-container'>
        {/* User Information */}
        <div className='profileCard'>
          <div>Hello {user.name}</div>

          <a href="/api/auth/logout">
            Sign-out
          </a>
          <div className='delete-btn'>Delete account</div>
        </div>
      </div>
  );
}

export default Account;