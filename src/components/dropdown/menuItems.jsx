//Lavet af Victoria


import { useState, useEffect, useRef } from "react";
import Dropdown from "./dropdown";
import { List } from "@mui/material";
import { ArrowRightRounded, ExpandMoreRounded } from "@mui/icons-material";
import { NavBtn } from "../buttons";

// Funktionskomponent MenuItems, modtager props items og depthLevel.
const MenuItems = ({ items, depthLevel }) => {
    // State-hooks til at håndtere dropdown-tilstand.
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    // Event handler for at åbne dropdown ved onMouseEnter.
    const onMouseEnter = () => {
        setDropdown(true);
    }

    // Event handler for at lukke dropdown ved onMouseLeave.
    const onMouseLeave = () => {
        setDropdown(false);
    }

    // Funktion til at skifte dropdown-tilstand (åbne/lukke).
    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    }

    // Funktion til at lukke dropdown, hvis den er åben.
    const closeDropdown = () => {
        dropdown && setDropdown(false);
    }

    // Effekthook til at håndtere klik uden for dropdown-området og lukke dropdown.
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        addEventListener("mousedown", handler);
        addEventListener("touchstart", handler);

        return () => {
            removeEventListener("mousedown", handler);
            removeEventListener("touchstart", handler)
        }
    }, [dropdown])

    // State-hooks til at håndtere scrolling og tilføje CSS-klasse baseret på scroll-position.
    const [isScrolled, setScrolled] = useState(false);

    // Funktion til at opdatere scrolled-tilstand baseret på scroll-position.
    const handleScroll = () => (window.scrollY > 150 ? setScrolled(true) : setScrolled(false));

    // Effekthook til at lytte efter scroll-events og opdatere tilstanden.
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <List
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.url && items.submenu ? (
                <>
                    {/* NavBtn-komponent for at vise knap med pilikon eller dropdown-ikon. */}
                    <NavBtn
                        name={items.title}
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        event={() => toggleDropdown()}
                        icon={depthLevel > 0 ? <ArrowRightRounded /> : <ExpandMoreRounded />}
                        page={items.url}
                    />
                    {/* Dropdown-komponenten, der vises ved klik eller hover på knappen. */}
                    <Dropdown
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        submenus={items.submenu}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    {/* NavBtn-komponent med ekstra styling, der vises ved klik eller hover. */}
                    <NavBtn
                        name={items.title}
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        event={() => toggleDropdown()}
                        icon={depthLevel > 0 ? <ArrowRightRounded /> : <ExpandMoreRounded />}
                        page={items.url}
                        className={`btn-container ${isScrolled && 'btn-scrolled'}`}
                    />
                    {/* Dropdown-komponenten, der vises ved klik eller hover på knappen. */}
                    <Dropdown
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        submenus={items.submenu}
                    />
                </>
            ) : (
                // NavBtn-komponent uden dropdown, der linker til en given side.
                <NavBtn page={items.url} name={items.title} />
            )}
        </List>
    );
};

export default MenuItems;
