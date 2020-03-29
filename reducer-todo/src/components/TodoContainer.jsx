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
    console.log("handleSubmit");
  }
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <TodoCard />
    </div>
  )
}

