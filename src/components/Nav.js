import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
  <nav className="main-nav">
        <ul>
          <li><NavLink to='/puppies'>Puppys</NavLink></li>
          <li><NavLink to='/kittens'>Kittens</NavLink></li>
          <li><NavLink to='/beaches'>Beaches</NavLink></li>
        </ul>
  </nav>
  
);

export default Nav;