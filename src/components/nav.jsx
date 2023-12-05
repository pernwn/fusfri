import { ButtonGroup } from "@mui/material";
import { FilledBtn, OutlinedBtn } from "./buttons";
import { useEffect, useState } from "react";

//Individuel styling som udgangspunkt – sammensætter alt til sidst 
import '../styles/vic.css'

import logo from "../assets/logo/fusfri-logo.png"

export default function Nav() {
    const [isScrolled, setScrolled] = useState(false);


    const handleScroll = () => window.scrollY > 150 ? setScrolled(true) : setScrolled(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <header className={`header-container ${isScrolled && 'header-scrolled'}`}>
            <img src={logo} className={`logo ${isScrolled && 'logo-scrolled'}`} alt="Fussingø-Egnens Logo" />
            
                <Nav className={`nav-container ${isScrolled && 'nav-scrolled'}`}>
                    <OutlinedBtn name="Hjem" page="/" />
                    <OutlinedBtn name="Information" page="/information" />
                    <OutlinedBtn name="Om Fusfri" page="/omFus" />
                    <OutlinedBtn name="Kontakt" page="/kontakt" />

                    <OutlinedBtn name="Friskole" page="/friskole" />
                </Nav>

        </header>
    )

}