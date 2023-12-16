//Lavet af Victoria


import { Link } from "react-router-dom";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import { useEffect, useState } from "react";

import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";

import "../../styles/vic.css";

import { Box, Fab, Fade, Typography } from "@mui/material";
import logo from "../../assets/logo/fusfri-logo.png";
import Search from "../search";

//Funktionskomponenten Header, der tager isFooterVisible som en prop.
const Header = ({ isFooterVisible }) => {

  //State-hook til at holde styr på, om siden er blevet scrollet.
  const [isScrolled, setScrolled] = useState(false);

  //Funktion til at håndtere scroll-events og opdatere isScrolled-state.
  const handleScroll = () => (window.scrollY > 50 ? setScrolled(true) : setScrolled(false));

  //Effekthook, der tilføjer og fjerner event listener til scroll.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Funktion til at håndtere yderligere scroll-action, f.eks. visning af knapper ved bestemt scrolling.
  const handleActionScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const footerHeight = document.getElementById("sidefod").offsetHeight;
    const minimumScroll = 100;
    setScrolled(scrollPosition < documentHeight - (800 + footerHeight) && scrollPosition > minimumScroll);
  }

  //Effekthook til yderligere scroll-action og tilføjelse/fjernelse af event listener.
  useEffect(() => {
    window.addEventListener("scroll", handleActionScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleActionScroll);
    };
  }, []);

  //Funktion til at rulle siden til toppen ved klik på knappen.
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box>
      <header className={`header-container ${isScrolled && "header-scrolled"}`}>
        {/*Logo, der linkes til hjemmesiden. */}
        <Link to="/">
          <img src={logo} alt="Fussingø-Egnens Friskole logo" className={`logo ${isScrolled && "logo-scrolled"}`} />
        </Link>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/*Søgekomponent */}
          <Search />
          {/*Navigation bar */}
          <Navbar />
          {/*Mobil navigation bar */}
          <MobileNav />
        </Box>
      </header>

      {/*Viser handlingselementer som knapper ved bestemt scrolling. */}
      {isFooterVisible ? (
        <Fade in={isScrolled} timeout={300}>
          <Box sx={{ position: "fixed", bottom: 100, right: 50, zIndex:9, '& > :not(style)': { m: 1} }} className={`action-container ${isScrolled && "action-scrolled"}`} >
            {/*Link til kontaktsektionen med en telefonikonknappe */}
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
            {/*Knappen til at rulle op til toppen af siden */}
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
