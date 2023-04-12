import React from 'react'
import PropTypes from 'prop-types'
import '../UI/AddCreature.css'

export default function AddCreature(props) {
  let success = false
  let successMessage = ' has been added!'
  function addAnimal(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries())

    if (formJson.kind === 'bird') {
      const filteredArray = props.data.birds.filter((bird) => {
        return bird.name === formJson.name.toLowerCase()
      })
      if (filteredArray.length === 0) {
        const birds = [...props.data.birds]
        birds.push({ name: formJson.name.toLowerCase(), likes: 0 })
        birds.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        props.updateState('birds', birds)
        success = true
        successMessage = formJson.name.toLowerCase() + successMessage
      } else {
        alert('That bird already exists!')
      }
    } else if (formJson.kind === 'animal') {
      const filteredArray = props.data.animals.filter((animal) => {
        return animal.name === formJson.name.toLowerCase()
      })
      if (filteredArray.length === 0) {
        const animals = [...props.data.animals]
        animals.push({ name: formJson.name.toLowerCase(), likes: 0 })
        animals.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        props.updateState('animals', animals)
      } else {
        alert('That animal already exists!')
      }
    }
  }

  return (
    <>
      <form method="post" onSubmit={addAnimal}>
        <fieldset>
          <legend>Fill out the form to add a creature</legend>
          <select name="kind">
            <option value="animal">Animal</option>
            <option value="bird">Bird</option>
          </select>
          <input type="text" name="name" placeholder="Name of the creature" />
          <button className="formSubmit" type="submit">
            Add creature
          </button>
        </fieldset>
      </form>
      {success && <h2>{successMessage}</h2>}
    </>
  )
}

AddCreature.propTypes = {
  data: PropTypes.object.isRequired,
  updateState: PropTypes.func
}
