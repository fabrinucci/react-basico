import { TodoIcon } from "./";

export function CompleteIcon({ completed, onToggle }) {
  return (
    <TodoIcon 
      type='check'
      color={completed ? '#4caf50' : '#afafaf'}
      onClick={onToggle}
    />
  )
}