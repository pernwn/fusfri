// Lavet af Victoria

// Menupunkter for mobil nav
// Komponenten modtager properties som items (menupunkter), depthLevel (niveauet af indlejring), showMenu (status for at vise menu) og setShowMenu (funktion til at ændre showMenu-status).
// Komponenten returnerer en liste (li) med menupunkter, hvor hvert element kan være en simpel link, en knap med dropdown eller en knap med yderligere undermenuer ved hjælp af MobileDropdown-komponenten.

import { Link } from "react-router-dom";
import MobileDropdown from "./mobiledropdown";
import { Button } from "@mui/material";
import { useState } from "react";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
    // State til at styre dropdown-status for dette menuelement.
    const [dropdown, setDropdown] = useState(false);

    // Funktion til at lukke dropdown og menu, når der klikkes uden for dropdown-menuen.
    const closeDropdown = () => {
        dropdown && setDropdown(false);
        showMenu && setShowMenu(false);
    };

    // Funktion til at skifte dropdown-status og forhindre propagations af klikhændelsen.
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdown((prev) => !prev);
    };

    // Returnerer et listeindgangselement baseret på indholdet af items.
    return (
        <li className="menu-items" onClick={closeDropdown}>
            {items.url && items.submenu ? (
                // Hvis menuelementet har en URL og en undermenu, vises en knap med dropdown og MobileDropdown-komponenten.
                <>
                    <Button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={(e) => toggleDropdown(e)}
                        endIcon={dropdown ? (
                            <ExpandLessRounded />
                        ) : (
                            <ExpandMoreRounded />
                        )}
                    >
                        <Link to={items.url} onClick={closeDropdown}>
                            {items.title}
                        </Link>
                    </Button>
                    <MobileDropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : !items.url && items.submenu ? (
                // Hvis menuelementet ikke har en URL, men har en undermenu, vises en knap med dropdown og MobileDropdown-komponenten.
                <>
                    <Button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}>
                        {items.title}{" "}
                        <div onClick={(e) => toggleDropdown(e)}>
                            {dropdown ? (
                                <span className="arrow-close" />
                            ) : (
                                <span className="arrow" />
                            )}
                        </div>
                    </Button>
                    <MobileDropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                // Hvis menuelementet er en simpel link, vises det som et link.
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MobileMenuItems;
