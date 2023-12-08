import { useEffect, useRef, useState } from "react";
import MobileMenuItems from "./mobileMenuItems";
import { menuItemsData } from "./menuitemsData";
import { List } from "@mui/material";

const MobileNav = () => {
    const depthLevel = 0;
    const [showMenu, setShowMenu] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(showMenu && ref.current && !ref.current.contains(event.target) ){
                setShowMenu(false);
            }

            addEventListener("mousedown", handler);
            addEventListener("touchstart", handler);
            
            return () => {
                removeEventListener("mousedown", handler);
                removeEventListener("touchstart", handler)
            }
        }
    }, [showMenu])


    return(
        <nav className="mobile-nav">
        <button
          className="mobile-nav__menu-button"
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}>
          Menu
        </button>
  
        {showMenu && (
          <List className="menus" ref={ref}>
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
    )
}

export default MobileNav