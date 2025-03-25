export default function TodoItem({ todo }) {
  const { id, task, completed } = todo;
  
  return (
    <>
      <div key={id}>
        <input type="checkbox" checked={completed} />

        <p>{task}</p>
      </div>
    </>
  );
}
