import React, { useReducer, useState, useEffect } from 'react'
import * as red from '../reducer/reducer'
import TodoCard from './TodoCard'
import Form from './Form'

export default function TodoContainer() {

  const { initialState, reducer } = red.default;
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState()
  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleClear() {
    dispatch({ type: 'CLEAR' })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: input })
    setInput('')
  }

  function handleComplete(e) {
    console.log(state.tasks);
    state.tasks.map(task => { return task.completed = task.id == e.target.id ? !task.completed : task.completed })
    dispatch({ type: 'DONE', payload: state.tasks })
  }


  return (
    <div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} input={input} handleClear={handleClear} />
      <TodoCard tasks={state} handleComplete={handleComplete} />
    </div>
  )
}

