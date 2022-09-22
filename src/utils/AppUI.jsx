import { useContext, useState } from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../components/Modal';
import { TodoContext } from '../context';


export const AppUI = () => {

  const {
    toggleModal,
    setToggleModal,
    error, 
    loading, 
    searchedTodos, 
    toggleTodos, 
    deleteTodos
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Loading page</p>}
        {error && <p>Error page :(</p>}
        {(!loading && !searchedTodos.length) && <p>Create your first todo</p> }


        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggle = {() => toggleTodos(todo.text)}
            onDelete = {() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      { !!toggleModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
        

      <CreateTodoButton 
        toggleModal= { toggleModal }
        setToggleModal={ setToggleModal }
      />
    </>
  )
}
