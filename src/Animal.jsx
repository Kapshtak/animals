import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Search from './Search'
import './Animal.css'

const Animal = (props) => {
  const filteredAnimals = props.data.filter((animal) => {
    return animal.name.includes(props.searchQuery)
  })
  return (
    <>
      <Search func={props.searchFunction} />

      <h1>
        {filteredAnimals.length
          ? `Remaining ${props.kind}: ${filteredAnimals.length}`
          : `No more ${props.kind}((`}
      </h1>
      <div className="container">
        {filteredAnimals.map((animal) => (
          <Card
            key={animal.name}
            name={animal.name}
            likes={animal.likes}
            iconClass={animal.likes < 0 ? 'icon broken' : 'icon'}
            decreaseFunction={props.decreaseFunction.bind(
              this,
              animal.name,
              -1,
              props.data,
              props.kind
            )}
            increaseFunction={props.increaseFunction.bind(
              this,
              animal.name,
              +1,
              props.data,
              props.kind
            )}
            deleteFunction={props.deleteFunction.bind(
              this,
              animal.name,
              props.data,
              props.kind
            )}
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
  deleteFunction: PropTypes.func.isRequired,
  searchFunction: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  kind: PropTypes.string.isRequired
}

export default Animal
