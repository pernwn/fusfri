import { List } from "@mui/material";
import MenuItems from "./menuitems";
import { menuItemsData } from "./menuitemsData";


const Navbar = () => {
    return (
        <nav className="desktop-nav">
            <List className="menus">
                {menuItemsData.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
                })}
            </List>
        </nav>
    );
};

export default Navbar;