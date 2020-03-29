import React, { useReducer } from 'react'
import * as red from '../reducer/reducer'
import TodoCard from './TodoCard'
import Form from './Form'

export default function TodoContainer() {
  const { initialState, reducer } = red.default;
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'ADD' })
  }

  function handleDelete(e) {
    dispatch({ type: 'DELETE' })
  }
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <TodoCard initialState={initialState} handleDelete={handleDelete} />
    </div>
  )
}

