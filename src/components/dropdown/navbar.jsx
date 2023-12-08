import { Box, List } from "@mui/material";
import MenuItems from "./menuitems";
import { menuItemsData } from "./menuitemsData";
import { useEffect, useState } from "react";


const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => (window.scrollY > 150 ? setScrolled(true) : setScrolled(false));

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box className={`nav-container ${isScrolled && 'nav-scrolled'}`} >
            <List className={`btn-container ${isScrolled && 'btn-scrolled'}`}>
                {menuItemsData.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
                })}
            </List>
        </Box>
    );
};

export default Navbar;