import { Pendinglist } from './Pendinglist';
import { TodoList } from './TodoList';

function App() {
  return (
    <div>
      <h1>my-todo-list</h1>
      <TodoList />
      <Pendinglist />
    </div>
  );
}

export { App };

