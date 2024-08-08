import React, { useEffect, useState } from 'react';

const Menu = ({ onSelect }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const loadMenu = async () => {
      const config = await fetch('/config.json').then(res => res.json());
      setMenuItems(config.menu);
    };

    loadMenu();
  }, []);

  return (
    <nav>
      <ul className="menu">
        {menuItems.map(item => (
          <li key={item.name}>
            <button onClick={() => onSelect(item.component)} className="menu-item">{item.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;