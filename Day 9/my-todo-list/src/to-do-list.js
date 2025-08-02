function TodoList() {
  const todos = ["listening games", "complete task", "Read", "Playing games"];

  return (
    <div>
    <h2>Completed Tasks</h2>
  {todos.map((value, index) => (
    <h3
      key={index}
    >
      {index + 1}. {value} 
    </h3>
  ))}
</div>
  );
}

export { TodoList };




  