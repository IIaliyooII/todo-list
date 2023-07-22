import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  function handleTodoFormSubmit(event) {
    event.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }
  return (
    <form onSubmit={handleTodoFormSubmit} className='w-full flex gap-2 items-center justify-center mb-3'>
      <input
        name='todo'
        type='text'
        value={value}
        onChange={(txt) => setValue(txt.target.value)}
        className='py-3 px-6 font-IBM font-normal outline-none border-none rounded-lg bg-vendant-darker text-white italic placeholder:italic placeholder:text-sm '
        placeholder='add some todo...'
      />
      <button className='p-4 bg-vendant-darker text-white rounded-lg hover:bg-verdant-green hover:text-black duration-150'>
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default EditTodo;
