import React from 'react'

let initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: new Date()
}

function reducer(state, action) {
  console.log("reducer");
  return state;
}

export default { reducer, initialState }
