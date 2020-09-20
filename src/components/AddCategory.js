import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    inputValue.trim().length > 2 && setCategories(categories => [inputValue, ...categories])
    setInputValue('')
  }

  return (

    <form className="new-category-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <br />
      <button type="submit">Agregar</button>
    </form>

  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;