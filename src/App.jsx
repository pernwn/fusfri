import { ThemeProvider, useTheme } from "@emotion/react";
import { Box, CssBaseline, Fab, Fade, Typography } from "@mui/material";

import { myTheme } from "./components/theme";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";

import Friskole from "./pages/friskole";

import "./App.css";
import Kontakt from "./pages/kontakt";

import Calendar from "./pages/calender";
import Header from "./components/dropdown/header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CookiePrivat from "./pages/CookiePrivat";
import { useEffect, useRef, useState } from "react";

import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";
import Footer from "./components/footer";

function App({isFooterVisible}) {
  const outerTheme = useTheme();

  // Set scroll state and scroll event handler
  const [isScrolled, setScrolled] = useState(false);

  const footerRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const footerHeight = footerRef.current?.getHeight() || 0;
    const triggerScroll = window.innerHeight - footerHeight - 100;

    setScrolled(scrollPosition > 150 && scrollPosition < triggerScroll);

    console.log("Scroll Position:", scrollPosition);
    console.log("Footer Height:", footerHeight);
    console.log("Trigger Scroll:", triggerScroll);


  };
  
  useEffect(() => {

    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log("actionbuttons")
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={myTheme(outerTheme)}>
        <CssBaseline enableColorScheme />

        <Header isFooterVisible={true} />

        <Routes>
          <Route index element={<HomePage />} />
       
          <Route path="/omFus" element={""} />


          <Route path="/friskole" element={<Friskole />} />
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/information" element={<Calendar />} />


          <Route path="/cookieprivat" element={<CookiePrivat />} />

          <Route path="*" element={<Navigate to="/" />} /* 404 */ />
        </Routes>


        {isFooterVisible ? (
                  <Fade in={isScrolled} timeout={300}>
                  <Box sx={{ position: "fixed", bottom: 100, right: 50, zIndex:9, '& > :not(style)': { m: 1} }} className={`action-container ${isScrolled && "action-scrolled"}`} >
          
                    <Link to="/kontakt">
                      <Fab variant="extended" aria-label="contact">
                        <PhoneIcon sx={{ mr: 1 }} color="secondary" />
                        <Typography
                          variant="button"
                          sx={{ color: (mytheme) => mytheme.palette.secondary.main, fontWeight: "bold" }}
                        >
                          Kontakt
                        </Typography>
                      </Fab>
                    </Link>
          
                    <Fab size="small" color="secondary" aria-label="up" onClick={handleClick}>
                      <UpIcon />
                    </Fab>
          
                  </Box>
          
                </Fade>
          ) : null}

        <Footer ref={footerRef}/>
      </ThemeProvider>
    </>
  );
}

export default App;
