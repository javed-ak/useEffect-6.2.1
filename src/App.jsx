import { useEffect, useState } from 'react'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function (response) {
      setTodos(response.data.todos);
    })
  }, []);
  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed}/>)}
    </>
  )
}

function Todo({title, description, completed}) {
  return <div>
    <h1>{title}</h1>
    {description}
  </div>
}

export default App
