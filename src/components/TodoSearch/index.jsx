import { useContext } from 'react';
import { TodoContext } from '../../context';
import './TodoSearch.css';

export function TodoSearch() {

  const {inputSearch, setInputSearch} = useContext(TodoContext);

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
  }
  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        onChange={handleInputChange}
        value= {inputSearch}
      />
    </>
  );
}
