import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const TodoForm = ({ setTodo }) => {
  const [value, setValue] = useState();

  function handleTodoFormSubmit(event) {
    event.preventDefault();
    setTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleTodoFormSubmit} className='w-full flex gap-2 items-center justify-center mb-3'>
      <input
        name='todo'
        type='text'
        value={value || ""}
        onChange={(txt) => setValue(txt.target.value)}
        className='py-3 px-6 font-IBM font-normal outline-none border-none rounded-lg bg-vendant-darker text-white italic placeholder:italic placeholder:text-sm shadow-lg'
        placeholder='add some todo...'
        autoComplete='off'
      />
      <button className='p-4 bg-vendant-darker text-white rounded-lg hover:bg-verdant-green hover:text-black duration-150 shadow-lg'>
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default TodoForm;
