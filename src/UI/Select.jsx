import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
  return (
    <select onChange={props.onChange}>
      <option disabled value="">
        {props.title}
      </option>
      {props.options.map((obj) => {
        return (
          <option key={obj.value} value={obj.value}>
            {obj.name}
          </option>
        )
      })}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  title: PropTypes.string
}

export default Select
