import './CreateTodoButton.css';

export function CreateTodoButton({ setToggleModal }) {

  const handleClick = () => {
    setToggleModal(prevState => !prevState)
  }
    
  return (
    <button 
      className="CreateTodoButton"
      onClick={ handleClick }
    >
      +
    </button>
  );
}