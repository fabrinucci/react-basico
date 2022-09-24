import './TodoList.css'

export function TodoList(props) {

  const renderFunction = props.children || props.render

  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchText)}

      { props.searchedTodos.map(renderFunction)}

    </section>
  );
}
