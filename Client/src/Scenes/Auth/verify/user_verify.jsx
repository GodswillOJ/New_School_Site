import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetUserVerifyQuery } from 'state/api';

const UserVerify = () => {
  const { id } = useParams();  // Get the id from the URL
  const { data, isLoading, error } = useGetUserVerifyQuery(id);  // Pass the id to the query
  const [message, setUserMessage] = useState('');

  console.log('user_data:', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="VerifyCont">
      <div id="Verify_info">
        <h1>Student Verification Mail</h1>
        <div>
          {data ? (
            <p>
              <b>Hi, {data.username}</b>
              {message} please click to redirect to login <Link to='/login'>proceed to login</Link>
            </p>
          ) : (
            <p>User data not available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserVerify;
