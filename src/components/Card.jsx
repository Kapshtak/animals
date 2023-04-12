import React from 'react'
import PropTypes from 'prop-types'
import Button from '../UI/Button'
import '../UI/Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <Button className={'btn delete'} func={props.deleteFunction} />
      <img
        className="animal_picture"
        src={`https://source.unsplash.com/150x120/?&${props.name}`}
        alt={`The image of ${props.name}`}
      ></img>
      <h2>{props.name}</h2>
      <div className="likes">
        <Button className={'btn decrease'} func={props.decreaseFunction} />
        <div className="icon_storage">
          <div className={props.iconClass}></div>
        </div>
        <div className="total_likes">
          <h3>{props.likes}</h3>
        </div>
        <Button className={'btn increase'} func={props.increaseFunction} />
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  iconClass: PropTypes.string.isRequired,
  decreaseFunction: PropTypes.func.isRequired,
  increaseFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired
}

export default Card
