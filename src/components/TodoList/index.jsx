import './TodoList.css'

export function TodoList(props) {

  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}
