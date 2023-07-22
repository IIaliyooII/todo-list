import React from "react";

const TodoList = () => {
  return (
    <div className='sm:w-full py-1 '>
      <h3 className='text-sm py-2 mb-2 md:px-32 uppercase rounded-md text-center text-white bg-vendant-darker'>
        todo list
      </h3>
      <div className='grid grid-cols-1 gap-2 rounded-md text-white p-2 bg-vendant-darker overflow-hidden'></div>
    </div>
  );
};

export default TodoList;
