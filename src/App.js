import { useState } from "react";
import Header from "./components/Header";
import TodoDone from "./components/TodoDone";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoText, setTodoText] = useState("");

  return (
    <main className='w-full min-h-screen flex flex-col gap-8 py-4 px-2'>
      <Header />
      <section className='grid grid-cols-1 gap-x-4 sm:grid-cols-1 lg:grid-cols-3 items-start sm:justify-items-center px-8'>
        <TodoForm setTodo={setTodoText} />
        <TodoList listTodo={todoText} />
        <TodoDone />
      </section>
    </main>
  );
}

export default App;
