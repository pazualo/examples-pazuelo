import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { relative } from 'path'
const Nav = () => {
  return (
    <ul className="nav" style={{ position: 'relative' }}>
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
      <li
        style={{
          marginRight: 15,
          listStyleType: 'none',
          position: 'absolute',
          right: '10px',
          top: '5px'
        }}
      >
        <a href="https://github.com/pazualo" target="_blank">
          <img
            src="https://image.flaticon.com/icons/svg/270/270798.svg"
            alt="github icon"
            width="20px"
          />
        </a>
      </li>
    </ul>
  )
}
export default Nav
