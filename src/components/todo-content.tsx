const TodoContent = async ({ id }: { id: string }) => {
  const data = await fetch(`https://dummyjson.com/todos/${id}`);
  const todo = await data.json();
  return (
    <div>
      {todo.id}-{todo.todo}
    </div>
  );
};

export default TodoContent;
