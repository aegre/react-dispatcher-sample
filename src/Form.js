import React, { useState, useCallback } from 'react';
import { addItem } from './ListActions';

const Form = () => {
  const [value, setValue] = useState('')
  const addItemCallback = useCallback(e => { 
    e.preventDefault()
    addItem(value)
    setValue('')
   },[value])
  return (
    <form onSubmit={addItemCallback}>
      <input type='text' value={value} onChange={(e => setValue(e.target.value))}></input>
      <button type='submit'>Create event</button>
    </form>
  );
};

export default Form;
