export default function TodoItem({
  todo,
  clickHandler,
  toggleHandler,
  priorityHandler,
}) {
  const { id, task, completed, priorityLevel } = todo;

  return (
    <>
      <div key={id}>
        <input type="checkbox" checked={completed} onChange={toggleHandler} />
        <p>{task}</p>
        <select
          name=""
          id="priority"
          value={priorityLevel}
          onChange={priorityHandler}
        >
          <option value="1">low</option>
          <option value="2">medium</option>
          <option value="3">high</option>
        </select>
        <button onClick={clickHandler}>delete task</button>
      </div>
    </>
  );
}
