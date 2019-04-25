import ListDispatcher from "./ListDispatcher";

export const ADD_ITEM_ACTION = 'add_item_action'
export const REMOVE_ITEM_ACTION = 'remove_item_action'

export const addItem = item => {
  ListDispatcher.dispatch(
    ADD_ITEM_ACTION,item
  )
}

export const removeItem = item => {
  ListDispatcher.dispatch(
    REMOVE_ITEM_ACTION,item
  )
}
