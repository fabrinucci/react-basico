import { useContext, useState } from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../components/Modal';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../context';

export const AppUI = () => {

  const {
    toggleModal,
    setToggleModal,
    error, 
    loading, 
    searchedTodos, 
    toggleTodos, 
    deleteTodos,
    totalTodos,
    completedTodos,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter 
        total={ totalTodos }
        completed={ completedTodos }
      />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError error={error}/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos /> }


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
