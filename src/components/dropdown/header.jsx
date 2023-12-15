//{ Lavet af Victoria }



import { Link } from "react-router-dom";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";




import "../../styles/vic.css";



import { Box, } from "@mui/material";
import logo from "../../assets/logo/fusfri-logo.png";
import Search from "../search";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => (window.scrollY > 150 ? setScrolled(true) : setScrolled(false));

  useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

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


      
    </Box>
  );
};

export default Header;
