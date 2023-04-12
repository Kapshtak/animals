import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../UI/Header.css'
import Button from './Button'

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
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Button
        label="Add creature"
        func={props.changeVisibility}
        className="addAnimal"
      />
    </header>
  )
}

Header.propTypes = {
  animalsAmount: PropTypes.number,
  birdsAmount: PropTypes.number,
  changeVisibility: PropTypes.func
}

export default Header
