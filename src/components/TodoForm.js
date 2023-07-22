import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const TodoForm = ({ setTodo }) => {
  const [text, setText] = useState("");

  function handleTodoFormSubmit(event) {
    event.preventDefault();
    setTodo(text);
    setText("");
  }
  return (
    <form onSubmit={handleTodoFormSubmit} className='w-full flex gap-2 justify-center '>
      <input
        name='todo'
        type='text'
        value={text}
        onChange={(txt) => setText(txt.target.value)}
        className='py-3 px-6 font-IBM font-normal outline-none border-none rounded-lg bg-vendant-darker text-white italic placeholder:italic placeholder:text-sm '
        placeholder='add some todo...'
      />
      <button className='p-4 bg-vendant-darker text-white rounded-lg hover:bg-verdant-green hover:text-black duration-150'>
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoForm;
