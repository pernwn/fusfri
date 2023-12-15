//{ Lavet af Victoria }



import { Link } from "react-router-dom";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import { useEffect, useRef, useState } from "react";

import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";

import "../../styles/vic.css";



import { Box, Fab, Fade, Typography } from "@mui/material";
import logo from "../../assets/logo/fusfri-logo.png";
import Search from "../search";

const Header = ({isFooterVisible}) => {
  /*This code defines a functional component Nav that displays a navigation bar for a website. 
The navigation bar contains a logo, a set of navigation buttons, 
and an event listener that triggers when the user scrolls. 
The event listener updates the state isScrolled to true if the user scrolls more than 150 pixels, 
otherwise false. This state is used to conditionally apply different CSS classes to the navigation bar, 
creating a different look for the scrolled state. */

  // Set scroll state and scroll event handler
  const [isScrolled, setScrolled] = useState(false);

  const footerRef = useRef(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const footerHeight = footerRef?.offsetHeight || 0;
    const triggerScroll = window.innerHeight - footerHeight - 100;

    console.log("Scroll Position:", scrollPosition);
    console.log("Footer Height:", footerHeight);
    console.log("Trigger Scroll:", triggerScroll);

    setScrolled(scrollPosition > 100 && scrollPosition < triggerScroll);

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
    <Box>
      <header className={`header-container ${isScrolled && "header-scrolled"}`}>
        <Link to="/">
          <img src={logo} alt="Fussingø-Egnens Friskole logo" className={`logo ${isScrolled && "logo-scrolled"}`} />
        </Link>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Search />
          <Navbar />

          <MobileNav />
        </Box>
      </header>

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

      
    </Box>
  );
};

export default Header;
