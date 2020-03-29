import React, { useReducer, useState } from 'react'
import * as red from '../reducer/reducer'
import TodoCard from './TodoCard'
import Form from './Form'

export default function TodoContainer() {
  const { initialState, reducer } = red.default;
  const [input, setInput] = useState()
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: input })
    setInput('')
  }

  function handleDelete(e) {
    dispatch({ type: 'DELETE' })
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} input={input} />
      <TodoCard state={state} handleDelete={handleDelete} />
    </div>
  )
}

