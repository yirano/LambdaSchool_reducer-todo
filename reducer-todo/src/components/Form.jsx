import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <input type="text" placeholder="Add a task" onChange={(e) => props.handleChange(e)} value={props.input} />
        <button onSubmit={(e) => props.handleSubmit(e)}>Submit</button>
      </form>
      <button onClick={(e) => props.handleClear(e)}>Clear Completed</button>
    </div>
  )
}
