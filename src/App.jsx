import React, { Component } from 'react'
import { animals, birds } from './animalsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import AddCreature from './components/AddCreature'
import Creature from './pages/Creature'
import Header from './UI/Header'
import Home from './pages/Home'
import './UI/App.css'

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
    input: { kind: 'animals', name: '' },
    visible: false,
    success: true
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

  addAnimal = (event) => {
    event.preventDefault()
    if (this.state.input.kind && this.state.input.name) {
      const filteredArray = this.state[this.state.input.kind].filter(
        (creature) => {
          return creature.name === this.state.input.name.toLowerCase()
        }
      )
      if (filteredArray.length === 0) {
        let fauna = [...this.state[this.state.input.kind]]
        fauna.push({ name: this.state.input.name.toLowerCase(), likes: 0 })
        fauna.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        this.setState({ [this.state.input.kind]: fauna })
        this.setState({ input: { kind: '', name: '' } })
        localStorage.setItem(this.state.input.kind, JSON.stringify(fauna))
        this.changeVisibility()
      } else {
        this.setState({ success: false })
      }
    }
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
          <AddCreature
            visible={this.state.visible}
            changeVisibility={this.changeVisibility}
            addAnimal={(event) => {this.addAnimal(event)}}
            selectTitle='Select the kind of a creature'
            selectOnChange={(event) => {
              this.setState({
                input: {
                  ...this.state.input,
                  kind: event.target.value
                }
              })
            }}
            inputValue={this.state.input.name}
            inputOnChange={(event) => {
              this.setState({
                input: {
                  ...this.state.input,
                  name: event.target.value.toLowerCase()
                }
              })
            }}
            success={this.state.success}
          />
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
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
