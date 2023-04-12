import React from 'react'
import PropTypes from 'prop-types'
import '../UI/Search.css'

const Search = (props) => {
  return (
    <input
      type="text"
      placeholder="Search for a buddy by name"
      onChange={props.func}
    />
  )
}

Search.propTypes = {
  func: PropTypes.func.isRequired
}

export default Search
