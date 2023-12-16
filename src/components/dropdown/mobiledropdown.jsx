// Lavet af Victoria

// Dette er en React-komponent kaldet MobileDropdown, der repræsenterer dropdown-menuen på mobile enheder.
// Komponenten modtager parametre såsom submenus (undermenuer), dropdown (status for dropdown), og depthLevel (niveauet af indlejring).
// Den returnerer en unordered list (ul) med undermenuer, hvor hvert undermenuelement renderes ved hjælp af MobileMenuItems-komponenten.
import MobileMenuItems from "./mobileMenuItems";

const MobileDropdown = ({ submenus, dropdown, depthLevel }) => {
  // Øger dybdeniveauet med 1, og tildeler en CSS-klasse baseret på dybdeniveauet.
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  // Returnerer en unordered list (ul) med undermenuer, hvor hvert undermenuelement er repræsenteret af MobileMenuItems-komponenten.
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};


export default MobileDropdown;
