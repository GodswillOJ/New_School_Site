import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import HomeLayout from './Scenes/Layouts/HomeLayouts/index'
import Home from './Scenes/Home/index';
import AboutUs from './Scenes/Home/about';
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
import Profile from 'Scenes/Students/Dashboard/pages/profile';
import Library from 'Scenes/Students/Dashboard/pages/library';
import Attendance from 'Scenes/Students/Dashboard/pages/attendance';
import Assignment from 'Scenes/Students/Dashboard/pages/assignment';
import Courses_info from 'Scenes/Students/Dashboard/pages/courses';
import Timetable from 'Scenes/Students/Dashboard/pages/timetable';
import Grades from 'Scenes/Students/Dashboard/pages/grades';
import Payment from 'Scenes/Students/Dashboard/pages/payment';
import Messages from 'Scenes/Students/Dashboard/pages/messages';
import Activities from 'Scenes/Students/Dashboard/pages/activities';
import Geography from 'Scenes/Students/Dashboard/pages/geography';
import Result from 'Scenes/Students/Dashboard/pages/result';
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
              <Route path="/contact" element={<AboutUs />} /> 
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
              <Route path='/student/profile' element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>       
              } />
              <Route path='/student/attendance' element={
                <PrivateRoute>
                  <Attendance />
                </PrivateRoute>       
              } />
              <Route path='/student/courses' element={
                <PrivateRoute>
                  <Courses />
                </PrivateRoute>       
              } />
              <Route path='/student/grades' element={
                <PrivateRoute>
                  <Grades />
                </PrivateRoute>       
              } />
              <Route path='/student/results' element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>       
              } />
              <Route path='/student/assignments' element={
                <PrivateRoute>
                  <Assignment />
                </PrivateRoute>       
              } />
              <Route path='/student/library' element={
                <PrivateRoute>
                  <Library />
                </PrivateRoute>       
              } />
              <Route path='/student/timetable' element={
                <PrivateRoute>
                  <Timetable />
                </PrivateRoute>       
              } />
              <Route path='/student/activities' element={
                <PrivateRoute>
                  <Activities />
                </PrivateRoute>       
              } />
              <Route path='/student/payments' element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>       
              } />
              <Route path='/student/messages' element={
                <PrivateRoute>
                  <Messages />
                </PrivateRoute>       
              } />
              <Route path='/student/geography' element={
                <PrivateRoute>
                  <Geography />
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
