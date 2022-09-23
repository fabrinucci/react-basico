import { TodoIcon } from ".";

export function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type='delete' 
      onClick={ onDelete }
    />
  )
}