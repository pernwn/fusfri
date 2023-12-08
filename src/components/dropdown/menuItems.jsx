import { useState, useEffect, useRef } from "react";
import Dropdown from "./dropdown";
import { List } from "@mui/material";
import { ArrowRightRounded, ExpandMoreRounded } from "@mui/icons-material";

import { FilledBtn } from "../buttons";


const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    const onMouseEnter = () => {
        setDropdown(true);
    }

    const onMouseLeave = () => {
        setDropdown(false);
    }

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    }

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    }



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

    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => (window.scrollY > 150 ? setScrolled(true) : setScrolled(false));

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
                    <FilledBtn
                        name={items.title}
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        event={() => toggleDropdown()}
                        icon={depthLevel > 0 ? <ArrowRightRounded /> : <ExpandMoreRounded />}
                        page={items.url}
                    />


                    <Dropdown
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        submenus={items.submenu}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <FilledBtn
                        name={items.title}
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        event={() => toggleDropdown()}
                        icon={depthLevel > 0 ? <ArrowRightRounded /> : <ExpandMoreRounded />}
                        page={items.url}
                        className={`btn-container ${isScrolled && 'btn-scrolled'}`}
                    />

                    <Dropdown
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        submenus={items.submenu}
                    />
                </>

            ) : (
                <FilledBtn page={items.url} name={items.title} />
    
            )}
        </List>
    );
};

export default MenuItems;