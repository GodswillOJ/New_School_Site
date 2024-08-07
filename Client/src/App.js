import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import HomeLayout from './Scenes/Layouts/HomeLayouts/index'
import Home from './Scenes/Home/index';
import Faces from './Scenes/Home/pages/faces';
import Chemistry from './Scenes/Home/pages/chemistry';
import Facilities from './Scenes/Home/pages/our_school';
import Tutors from './Scenes/Home/pages/tutors';
import Events from './Scenes/Home/pages/events';
import Excursion from './Scenes/Home/pages/excursion';
import Courses from './Scenes/Home/pages/courses';
import Dashboard from './Scenes/Students/Dashboard/dashboard';
import Login from './Scenes/Auth/Login'; // Corrected import
import Register from './Scenes/Auth/Register'; // Corrected import
import UserVerify from './Scenes/Auth/verify/user_verify'; 
import Layout from "./Scenes/Layouts/Layout/index"; // for admin
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import '../src/App.css'

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>

            {/* Home_Layouts */}
            <Route element={<HomeLayout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/tutors' element={<Tutors />} />
              <Route path='/events' element={<Events />} />
              <Route path='/our_faces' element={<Faces />} />
              <Route path='/chemistry_class' element={<Chemistry />} />
              <Route path='/school_facilities' element={<Facilities />} />
              <Route path='/excursions' element={<Excursion />} />
              <Route path='/courses' element={<Courses />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/registerStudent" element={<Register />} />
              <Route path="/user_verify/:id" element={<UserVerify />} />
            </Route>

            {/*Student Layouts */}
            <Route element={<Layout/>}>
              <Route path='/student/dashboard' element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>       
              } />
            </Route>

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
