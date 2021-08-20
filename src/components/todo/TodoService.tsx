/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  date: string;
  done: boolean;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  var nextIdState = 0;

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    nextIdState = Math.max.apply(Math, todoState.map(i => { return i.id }));
    nextIdState === -Infinity ? (nextIdState = 1) : (nextIdState += 1)
    return nextIdState
  };

  const toggleTodo = (id: number) => {
    const TodoArray = todoState.filter((todo: Itodo) => todo.id === id)
    TodoArray[0].done ? (TodoArray[0].done = false) : (TodoArray[0].done = true)
    const UndoArray = todoState.filter((todo: Itodo) => todo.id !== id)
    const AllArray = TodoArray.concat(UndoArray)
    AllArray.sort(function (a, b) {
      return a.id < b.id ? -1 : 0;
    })
    setTodoState(AllArray)
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {

    let nextId = incrementNextId()
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId
      })
    );
  };

  const loadData = () => {
    let data = localStorage.getItem("todos");
    if (data === undefined) data = "";
    initialTodos = JSON.parse(data!);
    if (initialTodos && initialTodos.length >= 1) {
      incrementNextId();
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
