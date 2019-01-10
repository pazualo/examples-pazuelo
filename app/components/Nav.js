import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <ul className="nav">
      <li style={{ marginRight: 15, listStyleType: 'none' }}>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li style={{ marginRight: 15, listStyleType: 'none' }}>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li style={{ marginRight: 15, listStyleType: 'none' }}>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
};
export default Nav;
