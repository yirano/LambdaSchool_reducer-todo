import React, { useState } from 'react'

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
      return { tasks: [...state.tasks, { item: action.payload, id: Date.now(), completed: false }] }
    case 'DELETE':
      return console.log("DELETE")
    default:
      console.log("Default case/switch");
  }
}

export default { reducer, initialState }
