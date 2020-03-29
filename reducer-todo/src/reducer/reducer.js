import React from 'react'

let initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: new Date()
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return console.log("ADD")
    case 'DELETE':
      return console.log("DELETE")
    default:
      return console.log("DEFAULT?")
  }
}

export default { reducer, initialState }
