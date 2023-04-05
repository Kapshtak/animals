import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.func}>
      {props.label}
    </button>
  )
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string
}

export default Button
