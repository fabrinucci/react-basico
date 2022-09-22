import { useContext } from 'react';
import { TodoContext } from '../../context';
import './TodoCounter.css';

export function TodoCounter() {

  const { total, completed } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Has completado { completed } de { total } TODOs</h2>
  );
}
