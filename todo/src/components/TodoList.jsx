import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import deelete from "../assets/delete.png";

const TodoList = ({text,id,isComplete,delTodo,toggle}) => {
  return (
    <div className="  flex items-center py-0.5">
      <div onClick={()=>{toggle(id)}}  className={`  flex-1 flex items-center gap-2  cursor-pointer ${isComplete ? 'line-through' : ''}`}>
        <img className="w-7" src={isComplete ? tick : not_tick } alt="" />
        <p>{text }</p>
      </div>
      <img onClick={()=>{delTodo(id)}} className="w-5  cursor-pointer" src={deelete} alt="" />
    </div>
  );
};

export default TodoList;
