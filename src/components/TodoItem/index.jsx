import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

export function TodoItem({
  completed, 
  text, 
  onToggle, 
  onDelete
}) {

  return (
    <li className="TodoItem">
      <CompleteIcon completed={ completed } onToggle={ onToggle }/>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        { text }
      </p>
      <DeleteIcon onDelete={ onDelete }/>
    </li>
  );
}