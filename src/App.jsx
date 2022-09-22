import { TodoProvider } from "./context";
import { AppUI } from "./utils/AppUI";

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;