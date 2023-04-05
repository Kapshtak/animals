import React, { Component } from 'react'
import { animals, birds } from './animalsList'
import Header from './Header'
import Search from './Search'
import Animal from './Animal'
import './App.css'

class App extends Component {
  birds = [...birds].map((animal) => {
    return { name: animal.name.toLowerCase(), likes: animal.likes }
  })
  state = {
    animals: [...animals, ...this.birds].sort(function (a, b) {
      return a.name.localeCompare(b.name)
    }),
    query: ''
  }

  changeLikes = (name, likes) => {
    let animals = [...this.state.animals].map((item) => {
      if (item.name == name) {
        return { ...item, likes: item.likes + likes }
      } else {
        return item
      }
    })
    this.setState({ animals: animals })
  }

  deleteAnimal = (name) => {
    let animals = [...this.state.animals].filter((animal) => {
      return !(animal.name == name)
    })
    this.setState({ animals: animals })
  }

  findAnimal = (event) => {
    this.setState({ query: event.target.value.toLowerCase() })
  }

  render() {
    const filteredElements = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.query)
    })
    return (
      <div className="App">
        <Header />
        <Search func={this.findAnimal} />
        <Animal
          data={filteredElements}
          decreaseFunction={this.changeLikes}
          increaseFunction={this.changeLikes}
          deleteFunction={this.deleteAnimal}
        />
      </div>
    )
  }
}

export default App
