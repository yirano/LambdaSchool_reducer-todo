import React from 'react'

const TodoCard = (props) => {
  const { tasks } = props.tasks
  console.log(tasks);
  return (
    <div>
      {tasks.map(todo => {
        return (
          <div className="todoCard" id={todo.id} >
            <h4>{todo.item}</h4>
            <p>{JSON.stringify(todo.completed)}</p>
            <button id={todo.id} onClick={e => props.handleComplete(e)}>DONE</button>
          </div>
        )
      })}
    </div>
  )
}

export default TodoCard;