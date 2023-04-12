import React from 'react'
import Select from '../UI/Select'
import Input from '../UI/Input'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import PropTypes from 'prop-types'

const AddCreature = ({
  visible,
  changeVisibility,
  addAnimal,
  selectTitle,
  selectOnChange,
  inputValue,
  inputOnChange,
  success
}) => {
  return (
    <Modal
      visible={visible}
      changeVisibility={changeVisibility}
    >
      <div>
        <form onSubmit={addAnimal}>
          <fieldset>
            <legend>{success} Fill out the form to add a creature</legend>
            <Select
              title={selectTitle}
              options={[
                { name: 'Animal', value: 'animals' },
                { name: 'Bird', value: 'birds' }
              ]}
              onChange={selectOnChange}
            />
            <Input
              type="text"
              placeholder="Name"
              required
              value={inputValue}
              onChange={inputOnChange}
            />
            <Button label="Add creature" className="formSubmit" />
          </fieldset>
        </form>
        {!success && (
          <h2 className="creature_alert">That creature already exists!</h2>
        )}
      </div>
    </Modal>
  )
}

AddCreature.propTypes = {
  visible: PropTypes.bool,
  changeVisibility: PropTypes.func,
  addAnimal: PropTypes.func,
  selectTitle: PropTypes.string,
  selectOnChange: PropTypes.func,
  inputValue: PropTypes.string,
  inputOnChange: PropTypes.func,
  success: PropTypes.bool
}

export default AddCreature
