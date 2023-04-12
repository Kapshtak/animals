import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals ({props.animalsAmount})</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds ({props.birdsAmount})</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  animalsAmount: PropTypes.number,
  birdsAmount: PropTypes.number
}

export default Header
