import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('Todos_V1', []);

  const [inputSearch, setInputSearch] = useState('');
  const [toggleModal, setToggleModal] = useState(false);

  const completedTodos = todos.filter( todo => todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = []

  if( !inputSearch.length >= 1 ) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = inputSearch.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos);
  }

  const toggleTodos = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text )
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const newTodos = todos.filter( todo => todo.text !== text );
    saveTodos(newTodos)
  }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    inputSearch,
    searchedTodos,
    setInputSearch,
    toggleTodos,
    addTodos,
    deleteTodos,
    toggleModal,
    setToggleModal
  }
}

export { useTodos }