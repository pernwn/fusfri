// Lavet af Victoria

// Komponenten indeholder MenuItems-komponenten og bruger menuItemsData til at generere menuindgange.
// Derudover bruger komponenten state og useEffect til at styre det rullede tilstand af navigationslinjen.

import { Box, List } from "@mui/material";
import MenuItems from "./menuitems";
import { menuItemsData } from "./menuitemsData";
import { useEffect, useState } from "react";

const Navbar = () => {
    // State til at styre, om siden er blevet rullet mere end 150 pixels ned.
    const [isScrolled, setScrolled] = useState(false);

    // Funktion til at håndtere scroll-begivenheden og opdatere isScrolled-tilstanden.
    const handleScroll = () => (window.scrollY > 150 ? setScrolled(true) : setScrolled(false));

    // Effekt, der tilføjer og fjerner scroll-håndteringsfunktionen ved komponentens montering og demontering.
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Returnerer navigationslinjen, herunder en container til knapper og MenuItems-komponenten.
    return (
        <Box className={`nav-container ${isScrolled && 'nav-scrolled'}`}>
            <List className={`btn-container ${isScrolled && 'btn-scrolled'}`}>
                {/* Mapper gennem menuItemsData og render MenuItems-komponenten for hver menuindgang. */}
                {menuItemsData.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </List>
        </Box>
    );
};


export default Navbar;
