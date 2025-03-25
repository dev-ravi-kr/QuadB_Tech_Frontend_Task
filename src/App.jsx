import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <TodoList />
        <TodoForm />
      </div>
    </>
  );
}
