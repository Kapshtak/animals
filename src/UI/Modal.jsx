import React from 'react'
import PropTypes from 'prop-types'
import cl from '../UI/Modal.module.css'

const Modal = ({ children, visible }) => {
  const rootClasses = [cl.modal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.modal_content}>{children}</div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  visible: PropTypes.bool,
  changeVisibility: PropTypes.func
}

export default Modal
