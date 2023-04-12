import React, { Component } from 'react'
import { animals, birds } from './animalsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Animal from './Animal'
import Home from './Home'
import './App.css'

class App extends Component {
  birds = [...birds].map((bird) => {
    return { name: bird.name.toLowerCase(), likes: bird.likes }
  })

  animals = [...animals]

  state = {
    animals: localStorage.getItem('animals')
      ? JSON.parse(localStorage.getItem('animals'))
      : this.animals,
    birds: localStorage.getItem('birds')
      ? JSON.parse(localStorage.getItem('birds'))
      : this.birds,
    query: ''
  }

  changeLikes = (name, likes, state, kind) => {
    let fauna = state.map((item) => {
      if (item.name == name) {
        return { ...item, likes: item.likes + likes }
      } else {
        return item
      }
    })
    this.setState({ [kind]: fauna })
    localStorage.setItem(kind, JSON.stringify(fauna))
  }

  deleteAnimal = (name, state, kind) => {
    let fauna = state.filter((animal) => {
      return !(animal.name == name)
    })
    this.setState({ [kind]: fauna })
    localStorage.setItem(kind, JSON.stringify(fauna))
  }

  findAnimal = (event) => {
    this.setState({ query: event.target.value.toLowerCase() })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            animalsAmount={this.state.animals.length}
            birdsAmount={this.state.birds.length}
          />
          <Routes>
            <Route
              path="/"
              element={<Home animalLabel="Animals" birdLabel="Birds" />}
            />
            <Route
              path="/animals"
              element={
                <Animal
                  kind="animals"
                  data={this.state.animals}
                  searchQuery={this.state.query}
                  searchFunction={this.findAnimal}
                  increaseFunction={this.changeLikes}
                  decreaseFunction={this.changeLikes}
                  deleteFunction={this.deleteAnimal}
                />
              }
            />
            <Route
              path="/birds"
              element={
                <Animal
                  kind="birds"
                  data={this.state.birds}
                  searchQuery={this.state.query}
                  searchFunction={this.findAnimal}
                  increaseFunction={this.changeLikes}
                  decreaseFunction={this.changeLikes}
                  deleteFunction={this.deleteAnimal}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
