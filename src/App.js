import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoWrapper from "./components/TodoWrapper";
import EditTodo from "./components/EditTodo";

function App() {
  const [todoText, setTodoText] = useState([]);
  function todos(todo) {
    setTodoText([...todoText, { id: Math.random(), task: todo, completed: false, isEditing: false }]);
  }
  function checkHandler(id) {
    setTodoText(todoText.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }
  function deleteHandler(id) {
    setTodoText(todoText.filter((todo) => todo.id !== id));
  }
  function editHandler(id) {
    setTodoText(todoText.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  }
  function editTask(task, id) {
    setTodoText(todoText.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
  }

  return (
    <main className='w-full min-h-screen mx-auto flex flex-col gap-8 py-4 px-2'>
      <Header />
      <TodoWrapper>
        <TodoForm setTodo={todos} editTodo={todoText} />

        {todoText.map((todo, index) =>
          todo.isEditing ? (
            <EditTodo key={index} editTodo={editTask} task={todo} />
          ) : (
            <TodoList
              key={index}
              task={todo}
              checkHandler={checkHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          )
        )}
      </TodoWrapper>
    </main>
  );
}

export default App;
