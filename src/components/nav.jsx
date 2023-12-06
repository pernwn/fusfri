//import { ButtonGroup } from "@mui/material";
import { OutlinedBtn } from "./buttons";
import { useEffect, useState } from "react";

//IKONER FRA MUI
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhoneIcon from '@mui/icons-material/Phone';

//Individuel styling som udgangspunkt – sammensætter alt til sidst 
import '../styles/vic.css'

import logo from "../assets/logo/fusfri-logo.png"
import { Box, ButtonGroup, Fab, Typography } from "@mui/material";




export default function Nav() {
    /*This code defines a functional component Nav that displays a navigation bar for a website. 
    The navigation bar contains a logo, a set of navigation buttons, 
    and an event listener that triggers when the user scrolls. 
    The event listener updates the state isScrolled to true if the user scrolls more than 150 pixels, 
    otherwise false. This state is used to conditionally apply different CSS classes to the navigation bar, 
    creating a different look for the scrolled state. */

    // Set scroll state and scroll event handler
    const [isScrolled, setScrolled] = useState(false);


    const handleScroll = () => window.scrollY > 150 ? setScrolled(true) : setScrolled(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <header className={`header-container ${isScrolled && 'header-scrolled'}`}>
                <img src={logo} className={`logo ${isScrolled && 'logo-scrolled'}`} alt="Fussingø-Egnens Logo" />

                <ButtonGroup className={`nav-container ${isScrolled && 'nav-scrolled'}`}>
                    <OutlinedBtn name="Hjem" page="/" />
                    <OutlinedBtn name="Information" page="/information" />
                    <OutlinedBtn name="Om Fusfri" page="/omFus" />
                    <OutlinedBtn name="Kontakt" page="/kontakt" />

                    <OutlinedBtn name="Friskole" page="/friskole" />
                </ButtonGroup>

            </header>
  
                <Box sx={{ mr: 5 }} className={`action-btn-container ${isScrolled && 'action-btn-scrolled'}`}  >
                    <Fab variant="extended" aria-label="contact">
                        <PhoneIcon sx={{ mr: 1 }} color="secondary" />
                        <Typography variant="button" sx={{ color: myTheme => myTheme.palette.secondary.main, fontWeight: "bold" }} >Kontakt</Typography>
                    </Fab>

                    <Fab size="small" color="secondary" aria-label="up" onClick={handleClick}>
                        <UpIcon />
                    </Fab>

                </Box>


        </>
    )

}