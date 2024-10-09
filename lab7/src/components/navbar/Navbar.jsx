import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/goods">Галерея товарів</NavLink>
    </div>
  );
}
