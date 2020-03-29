import React from 'react'

const TodoCard = (props) => {
  const { tasks } = props.state
  console.log(tasks);
  return (
    <div>
      {tasks.map(todo => {
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