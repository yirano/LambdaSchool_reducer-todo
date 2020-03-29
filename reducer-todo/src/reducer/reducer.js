import React from 'react'

let initialState = {
  tasks: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: Date.now()
    }
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, { item: "a new task", id: Date.now(), completed: false }] }
    case 'DELETE':
      return console.log("DELETE")
    default:
      return console.log("DEFAULT?")
  }
}

export default { reducer, initialState }
