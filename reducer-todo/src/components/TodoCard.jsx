import React from 'react'

const TodoCard = (props) => {
  console.log(props.initialState);
  return (
    <div>
      {props.initialState.map(todo => {
        return (
          <>
            <h4>{todo.item}</h4>
            <p>{JSON.stringify(todo.completed)}</p>
            <button onClick={(e) => props.handleDelete(e)}>Delete</button>
          </>
        )
      })}
    </div>
  )
}

export default TodoCard;