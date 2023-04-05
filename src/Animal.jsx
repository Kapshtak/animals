import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import './Animal.css'

const Animal = (props) => {
  return (
    <>
      <h1>
        {props.data.length
          ? `Remaining animals: ${props.data.length}`
          : 'No more animals(('}
      </h1>
      <div className="container">
        {props.data.map((animal) => (
          <Card
            key={animal.name}
            name={animal.name}
            likes={animal.likes}
            iconClass={animal.likes < 0 ? 'icon broken' : 'icon'}
            decreaseFunction={props.decreaseFunction.bind(
              this,
              animal.name,
              -1
            )}
            increaseFunction={props.increaseFunction.bind(
              this,
              animal.name,
              +1
            )}
            deleteFunction={props.deleteFunction.bind(this, animal.name)}
          />
        ))}
      </div>
    </>
  )
}

Animal.propTypes = {
  data: PropTypes.array.isRequired,
  decreaseFunction: PropTypes.func.isRequired,
  increaseFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired
}

export default Animal
