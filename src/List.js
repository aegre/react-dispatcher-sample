import React, { useState, useEffect, useCallback } from 'react';
import ListDispatcher from './ListDispatcher';
import { ADD_ITEM_ACTION, removeItem, REMOVE_ITEM_ACTION } from './ListActions';

const List = () => {
  const [items, setItems] = useState([])
  const addItemCallback = useCallback(item => setItems( prevItems => [...prevItems, item]), [])
  const removeItemCallback = useCallback(item => setItems( prevItems => prevItems.filter((_, idx) => idx === item)), [])
  useEffect(() => {
    ListDispatcher.addListener(ADD_ITEM_ACTION, addItemCallback)
    ListDispatcher.addListener(REMOVE_ITEM_ACTION, removeItemCallback)
    return () => {
      ListDispatcher.removeListener(ADD_ITEM_ACTION, addItemCallback)
      ListDispatcher.removeListener(REMOVE_ITEM_ACTION, removeItemCallback)
    }
  }, [addItemCallback, removeItemCallback])

  useEffect(() => { console.log(' mounted') }, [])
  return (
    <ul>
      {
        items.map((item, idx) => <li key={`${item}-${idx}`} onClick={() => { removeItem(idx) }}>{item}</li>)
      }
    </ul>
  );  
}

export default List;
