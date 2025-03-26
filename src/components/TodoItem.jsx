export default function TodoItem({ todo, clickHandler, toggleHandler }) {
  const { id, task, completed } = todo;

  return (
    <>
      <div key={id}>
        <input type="checkbox" checked={completed} onChange={toggleHandler} />

        <p>{task}</p>

        <button onClick={clickHandler}>delete task</button>
      </div>
    </>
  );
}
