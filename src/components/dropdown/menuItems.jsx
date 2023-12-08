import { useState, useEffect, useRef } from "react";
import Dropdown from "./dropdown";
import { Button, List } from "@mui/material";
import { ArrowRight, ArrowRightRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";


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
                    <Button
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => toggleDropdown()}
                    >
                        <Link to={items.url}>{items.title}</Link>
                        {depthLevel > 0 ? <ArrowRightRounded /> : <ExpandMoreRounded />}
                    </Button>


                    <Dropdown
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        submenus={items.submenu}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <Button
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => toggleDropdown()}
                    >
                        {items.title}
                        {depthLevel > 0 ? <ArrowRightRounded /> : <ExpandMoreRounded />}
                    </Button>


                    <Dropdown
                        depthLevel={depthLevel}
                        dropdown={dropdown}
                        submenus={items.submenu}
                    />
                </>

            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </List>
    );
};

export default MenuItems;