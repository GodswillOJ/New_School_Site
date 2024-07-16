import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import HomeLayout from './Scenes/Layouts/HomeLayouts/index'
import Home from './Scenes/Home/index';
import Login from './Scenes/Auth/Login'; // Corrected import
import Register from './Scenes/Auth/Register'; // Corrected import
import 'App.css'

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
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
