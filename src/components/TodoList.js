import React from "react";
import { AiFillCheckCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoList = ({ task, checkHandler, deleteHandler, editHandler }) => {
  return (
    <div className='flex justify-between items-center gap-4 rounded-md text-white p-2 mb-2 bg-vendant-darker overflow-hidden'>
      <p className={task.completed ? "text-slate-300 line-through" : "text-white"}>{task.task} </p>

      <div className='flex gap-2 '>
        <AiFillCheckCircle
          onClick={() => checkHandler(task.id)}
          className='text-2xl text-blue-500 cursor-pointer  hover:text-blue-400 duration-150'
        />
        <AiFillEdit
          onClick={() => editHandler(task.id)}
          className='text-2xl text-purple-500 cursor-pointer hover:text-purple-400 duration-150'
        />
        <AiFillDelete
          onClick={() => deleteHandler(task.id)}
          className='text-2xl text-red-500 cursor-pointer hover:text-red-400 duration-150'
        />
      </div>
    </div>
  );
};

export default TodoList;
