import React, { useEffect, useRef, useState } from "react";
import todo from "../assets/todo_icon.png";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoitem, setTodoitem] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoitem((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  };

  const delTodo = (id) => {
    setTodoitem((prevtodos) => {
      return prevtodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoitem((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todoitem))

  },[todoitem])
  return (
    <div className="bg-white w-11/12 place-self-center max-w-md flex flex-col p-7 min-h-[550px] rounded-xl ">
      {/* -------------title------------ */}
      <div className="flex  gap-2 items-center mt-5 ">
        <img src={todo} className="w-7" alt="" />
        <h1 className="font-semibold text-2xl">To-do List</h1>
      </div>
      {/* -------------title------------ */}
      <div className="bg-slate-200 flex items-center rounded-full  my-7">
        <input
          ref={inputRef}
          className="bg-transparent outline-none border-0 flex-1 h-14 pl-5 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
          name=""
          id=""
        />
        <button
          onClick={add}
          className="bg-orange-500 h-14 rounded-full w-32 outline-none order-none"
        >
          Add +
        </button>
      </div>
      {/* -------------to-do list------------ */}
      <div>
        {todoitem.map((item, index) => {
          return (
            <TodoList
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              delTodo={delTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
