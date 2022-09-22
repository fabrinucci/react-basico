import { useContext, useState } from 'react';
import { TodoContext } from '../../context';
import './TodoForm.css'

export function TodoForm() {

  const [newTodoValue, setNewTodoValue] = useState('')

  const { addTodos, setToggleModal } = useContext(TodoContext);
  
  const onCancel = () => {
    setToggleModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onAdd = (event) => {
    event.preventDefault();
    (newTodoValue.length >= 1) && addTodos(newTodoValue);
    (newTodoValue.length >= 1) && setToggleModal(false);
    
  }

  return (
    <form onSubmit={ onAdd }>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder='Cortar cebolla :('
        value={ newTodoValue }
        onChange={ onChange }
      ></textarea>

      <div className='TodoForm-buttonContainer'>
        <button 
          type='button' 
          onClick={ onCancel }
          className='TodoForm-button TodoForm-button-add'
        >
          Cancelar
        </button>
        <button 
          type='submit'
          className='TodoForm-button TodoForm-button-cancel'
        >
          Agregar
        </button>
      </div>

    </form>
  )
}