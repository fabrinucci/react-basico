import './TodoCounter.css';

export function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">Has completado { completed } de { total } TODOs</h2>
  );
}
