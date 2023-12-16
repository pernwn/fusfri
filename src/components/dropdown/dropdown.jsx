// Lavet af Victoria

import MenuItems from "./menuitems";

// Importerer MenuItems-komponenten fra "./menuitems".
// Dette er en komponent til at vise menuelementer.

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    // Øger dybdeniveauet med 1 for hver rekursive kald af Dropdown-komponenten.
    // Det hjælper med at styre, hvor mange niveauer dybt dropdown-menuet skal vises.
    depthLevel = depthLevel + 1;

    // Bestemmer klassen for dropdown-menuet baseret på dybdeniveauet.
    // Hvis dybdeniveauet er større end 1, tilføjes "dropdown-submenu" til klassen.
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
      // Returnerer en unordered list (ul) med klassen "dropdown".
      // Hvis dropdown-prop er sand, tilføjes også klassen "show".
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>

        {submenus.map((submenu, index) => (
            // Mapper over submenus og render MenuItems-komponenten for hver submenu.
            <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
        ))}
      </ul>
    );
  };
  
export default Dropdown;
