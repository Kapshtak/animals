import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../UI/Home.css'

const Home = (props) => {
  return (
    <div className="main-page-container">
      <Link to="/animals">
        <div className="animal-card animal">
          <h2>{props.animalLabel}</h2>
        </div>
      </Link>
      <Link to="/birds">
        <div className="animal-card bird">
          <h2>{props.birdLabel}</h2>
        </div>
      </Link>
    </div>
  )
}

Home.propTypes = {
  animalLabel: PropTypes.string.isRequired,
  birdLabel: PropTypes.string.isRequired
}

export default Home
