// Lavet af Victoria

// Dette er navigationen på mobile enheder
// Komponenten indeholder en mobilmenu, der vises ved at klikke på en knap, og MobileMenuItems-komponenten, der render menupunkter baseret på menuItemsData.
// Komponenten bruger state og useEffect til at styre visningen af mobilmenuen og lytte efter klik uden for menuen for at lukke den.

import { useEffect, useRef, useState } from "react";
import MobileMenuItems from "./mobileMenuItems";
import { menuItemsData } from "./menuitemsData";
import { List } from "@mui/material";

const MobileNav = () => {
    // Dybdeniveauet for menupunkter på mobile enheder sættes til 0.
    const depthLevel = 0;
    // State til at styre visningen af mobilmenuen.
    const [showMenu, setShowMenu] = useState(false);
    // Ref til at håndtere klik uden for menuen.
    let ref = useRef();

    // Effekt, der lytter efter klik uden for menuen for at lukke den.
    useEffect(() => {
        const handler = (event) => {
            if (showMenu && ref.current && !ref.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        addEventListener("mousedown", handler);
        addEventListener("touchstart", handler);

        return () => {
            removeEventListener("mousedown", handler);
            removeEventListener("touchstart", handler);
        };
    }, [showMenu]);

    // Returnerer navigationselementet for mobile enheder, herunder en knap og MobileMenuItems-komponenten.
    return (
        <nav className="mobile-nav">
            <button
                className="mobile-nav__menu-button"
                type="button"
                onClick={() => setShowMenu((prev) => !prev)}>
                Menu
            </button>

            {showMenu && (
                <List className="menus" ref={ref}>
                    {/* Mapper gennem menuItemsData og render MobileMenuItems-komponenten for hver menuindgang. */}
                    {menuItemsData.map((menu, index) => {
                        return (
                            <MobileMenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                                showMenu={showMenu}
                                setShowMenu={setShowMenu}
                            />
                        );
                    })}
                </List>
            )}
        </nav>
    );
};


export default MobileNav;
