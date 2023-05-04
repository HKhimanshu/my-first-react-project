import React from 'react';

const SideMenu = ({ menuOpen, setMenuOpen, menuItems }) => {
  return (
    <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={() => setMenuOpen(false)}>
        &times;
      </button>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
