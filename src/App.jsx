import { useTodos } from './hooks/useTodos';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoForm } from './components/TodoForm';
import { Modal } from './components/Modal';
import { TodoHeader } from './components/TodoHeader';
import { TodoCounter } from './components/TodoHeader/TodoCounter';
import { TodoSearch } from './components/TodoHeader/TodoSearch';
import { TodosError } from './components/TodoList/TodosError';
import { TodosLoading } from './components/TodoList/TodosLoading';
import { EmptyTodos } from './components/TodoList/EmptyTodos';
import { EmptySearchTodos } from './components/TodoList/EmptySearchTodos';
import { ChangeAlert } from './components/ChangeAlert';

function App() {

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
    inputSearch, 
    setInputSearch,
    addTodos,
    synchronizeTodos
  } = useTodos();

  return (
    <>
      <TodoHeader 
        loading={loading}
      >
        <TodoCounter 
          totalTodos={ totalTodos }
          completedTodos={ completedTodos }
        />
        <TodoSearch
          inputSearch={ inputSearch }
          setInputSearch={ setInputSearch }
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={inputSearch}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchTodos={() => <EmptySearchTodos />}
        // render={ todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onToggle = {() => toggleTodos(todo.text)}
        //     onDelete = {() => deleteTodos(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggle = {() => toggleTodos(todo.text)}
            onDelete = {() => deleteTodos(todo.text)}
          />
        )}
      </TodoList>

      {!!toggleModal && (
        <Modal>
          <TodoForm 
            addTodos={ addTodos }
            setToggleModal={ setToggleModal }
          />
        </Modal>
      )}
        
      <CreateTodoButton 
        setToggleModal={ setToggleModal }
      />

      <ChangeAlert 
        synchronize={synchronizeTodos}
      />
    </>
  );
}

export default App;