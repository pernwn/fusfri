import { ThemeProvider, useTheme } from "@emotion/react"
import { Box, CssBaseline, Fab, Typography } from "@mui/material";

import { myTheme } from "./components/theme";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import Nav from "./components/nav";
import Friskole from "./pages/friskole";

//IKONER FRA MUI
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhoneIcon from '@mui/icons-material/Phone';

import './App.css'
import { useEffect, useState } from "react";

function App() {
  const outerTheme = useTheme();
  const [isScrolled, setScrolled] = useState(false);
  
  const handleScroll = () => window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
  const handleClick = () => {
    window.scrollTo(0,0);
  } 
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (

    <ThemeProvider theme={myTheme(outerTheme)}>
      <CssBaseline enableColorScheme />

      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friskole" element={<Friskole />} />


        <Route path="*" element={<Navigate to="/" />} /* 404 */ />
      </Routes>

      <Box sx={{ mr: 5 }} className={`action-btn-container ${isScrolled && 'action-btn-scrolled'}`} >

        <Fab variant="extended" aria-label="contact">
          <PhoneIcon sx={{ mr: 1 }} color="secondary" />
          <Typography variant="button" sx={{ color: myTheme => myTheme.palette.secondary.main, fontWeight: "bold" }} >Kontakt</Typography>
        </Fab>

        <Fab size="small" color="secondary" aria-label="up" onClick={handleClick}>
          <UpIcon />
        </Fab>

      </Box>


    </ThemeProvider>




  )
}

export default App
