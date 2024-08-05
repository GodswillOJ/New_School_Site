import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../state/api';
import { Box, IconButton, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { setLoginStatus } from '../../state/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser({ email, password }).unwrap();
      localStorage.setItem('access_token', result.access_token);
      localStorage.setItem('userID', result.userID);
      dispatch(setLoginStatus({ isLoggedIn: true, userID: result.userID }));
      navigate('/user/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="Login">
      <Form
        onSubmit={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        label="Login form"
        loading={isLoading}
        error={error}
      />
      <Footer />
    </div>
  );
};

const Footer = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4, bgcolor: 'background.paper', mt: '1rem', width: '100%' }}>
    <Box display="flex" justifyContent="center" gap={2}>
      <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'primary.main' }}>
        <Facebook />
      </IconButton>
      <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'primary.main' }}>
        <Twitter />
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'primary.main' }}>
        <Instagram />
      </IconButton>
      <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'primary.main' }}>
        <LinkedIn />
      </IconButton>
    </Box>
    <Box mt={2}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2024, Developer Godswill Ogono
      </Typography>
    </Box>
  </Box>
);

const Form = ({ onSubmit, email, setEmail, password, setPassword, label, loading, error }) => {
  return (
    <div className="Login">
      <div className="CounterCont LogCont">
        <h2 className="Title">{label}</h2>
        <form className="Counter_Engine" id="registerInput" onSubmit={onSubmit}>
          <p>  <b>Please fill in your email and password.</b> </p>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div id="verify_btn">
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'login'}
            </button>
            {label === 'Login' && (
              <div id="redirect_log">
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
