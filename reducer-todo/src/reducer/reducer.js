import React, { useState } from 'react'

let initialState = {
  tasks: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: Date.now()
    },
    {
      item: "Laundry",
      completed: true,
      id: Date.now() + 1
    }
  ]
}


function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, { item: action.payload, id: Date.now(), completed: false }] }
    case 'DONE':
      return { tasks: [...action.payload] }
    case 'CLEAR':
      return {
        tasks: state.tasks.filter(task => {
          return task.completed === false;
        })
      };
    default:
      return console.log("Default case/switch");
  }
}

export default { reducer, initialState }
