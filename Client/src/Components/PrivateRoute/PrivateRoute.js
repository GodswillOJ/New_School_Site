// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  // Optionally, you could add more checks like token validation here

  return children;
};

export default PrivateRoute;
