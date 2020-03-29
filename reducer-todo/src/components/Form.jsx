import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form onClick={(e) => props.handleSubmit(e)}>
        <input type="text" placeholder="Add a task" />
        <button>Submit</button>
      </form>
    </div>
  )
}
