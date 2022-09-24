import './TodoSearch.css';

export function TodoSearch({ inputSearch, setInputSearch, loading }) {

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
  }
  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="Hacer Ejercicio"
        onChange={handleInputChange}
        value= {inputSearch}
        disabled={loading}
      />
    </>
  );
}
