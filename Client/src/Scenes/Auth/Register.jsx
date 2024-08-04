import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from '../../state/api';
import { Box, IconButton, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { setLoginStatus } from '../../state/index';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('country', country);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('phone', phone);
    formData.append('file', file);

    try {
      const result = await registerUser(formData).unwrap();
      dispatch(setLoginStatus({ isLoggedIn: true, userID: result.userID }));
      navigate('/user/dashboard');
    } catch (error) {
      setError('Error adding user. Please try again.');
    }
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
    "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
    "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Niger", "Nigeria", "Namibia"
  ];

  return (
    <div className="Register">
      <Form
        onSubmit={handleCreateUser}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        country={country}
        setCountry={setCountry}
        state={state}
        setState={setState}
        city={city}
        setCity={setCity}
        phone={phone}
        setPhone={setPhone}
        file={file}
        setFile={setFile}
        label="Registration form"
        loading={isLoading}
        error={error}
        countries={countries}
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

const Form = ({ onSubmit, username, setUsername, email, setEmail, password, setPassword, country, setCountry, city, setCity, state, setState, phone, setPhone, file, setFile, label, loading, error, countries }) => {
  return (
    <div className="Register">
      <div className="CounterCont RegCont">
        <h2 className="Title">{label}</h2>
        <form className="Counter_Engine" id="registerInput" onSubmit={onSubmit}>
          <p>  <b>Please complete fill the form below.</b> </p>
          <div className="user_img">
            <label>Profile Image:</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='country_detail'>
              <div>
                <label>State:</label>
                <input type="state" value={state} onChange={(e) => setState(e.target.value)} />
              </div>
              <div>
                <label>City:</label>
                <input type="city" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div>
                <label>Phone:</label>
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label>Select Country:</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Select country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
          </div>
          <div id="verify_btn">
            <button type="submit" disabled={loading}>
              {loading ? 'Creating User...' : 'Register'}
            </button>
            {label === 'Register' && (
              <div id="redirect_log">
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
