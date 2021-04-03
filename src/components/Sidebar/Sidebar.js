import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to='/' exact>
            Josefine
        </NavLink>
          <NavLink to='/projects'>
            My work
        </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar;
