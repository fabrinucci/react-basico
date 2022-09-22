import './TodoItem.css';

export function TodoItem({
  completed, 
  text, 
  onToggle, 
  onDelete
}) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={ onToggle }
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        { text }
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={ onDelete }
      >
        X
      </span>
    </li>
  );
}