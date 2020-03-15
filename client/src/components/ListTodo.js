import React from 'react';

const ListTodo = ({ todos, deleteTodo }) => {

  return (
    <ul>
      <li id='title'><div>Tarefa</div><div>Prioridade</div></li>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => {
                return (
                  <li key={todo._id} onClick={() => deleteTodo(todo._id)}><div>{todo.action}</div><div>{todo.priority}</div></li>
                )
              })
            )
            :
            (
              <li>Nada para fazer</li>
            )
      }
    </ul>
  )
}

export default ListTodo;