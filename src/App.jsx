import React, { Component } from 'react'
import { animals, birds } from './animalsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCreature from './components/AddCreature'
import Creature from './pages/Creature'
import Header from './UI/Header'
import Home from './pages/Home'
import './UI/App.css'
import About from './pages/About'
import Modal from './UI/Modal'

class App extends Component {
  state = {
    animals: localStorage.getItem('animals')
      ? JSON.parse(localStorage.getItem('animals'))
      : [...animals],
    birds: localStorage.getItem('birds')
      ? JSON.parse(localStorage.getItem('birds'))
      : [...birds].map((bird) => {
        return { name: bird.name.toLowerCase(), likes: bird.likes }
      }),
    query: '',
    visible: false
  }

  changeLikes = (name, likes, kind) => {
    let fauna = this.state[kind].map((item) => {
      if (item.name == name) {
        return { ...item, likes: item.likes + likes }
      } else {
        return item
      }
    })
    this.setState({ [kind]: fauna })
    localStorage.setItem(kind, JSON.stringify(fauna))
  }

  deleteAnimal = (name, kind) => {
    let fauna = this.state[kind].filter((animal) => {
      return !(animal.name == name)
    })
    this.setState({ [kind]: fauna })
    localStorage.setItem(kind, JSON.stringify(fauna))
  }

  findAnimal = (event) => {
    this.setState({ query: event.target.value.toLowerCase() })
  }

  updateState = (kind, newState) => {
    this.setState({ [kind]: newState })
    localStorage.setItem(kind, JSON.stringify(newState))
  }

  changeVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            animalsAmount={this.state.animals.length}
            birdsAmount={this.state.birds.length}
            changeVisibility={this.changeVisibility}
          />
          <Modal
            visible={this.state.visible}
            changeVisibility={this.changeVisibility}
          >
            <AddCreature data={this.state} updateState={this.updateState} changeVisibility={this.changeVisibility}/>
          </Modal>
          <Routes>
            <Route
              path="/"
              element={<Home animalLabel="Animals" birdLabel="Birds" />}
            />
            <Route
              path="/animals"
              element={
                <Creature
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
                <Creature
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
            {/* <Route
              path="/add"
              element={
                <AddCreature data={this.state} updateState={this.updateState} />
              }
            /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
