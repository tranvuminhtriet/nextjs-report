import Link from "next/link";

type TodoType = {
  id: number;
  todo: string;
};

const TodoPage = async () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const data = await fetch(
    `https://dummyjson.com/todos?skip=${randomNumber}&limit=10`
  );
  const todoList = await data.json();

  return (
    <div className="h-full flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-4">Todo list</h1>
      {todoList.todos.map((todo: TodoType) => (
        <Link
          href={`/todos/${todo.id}`}
          key={todo.id}
          className="mb-2 hover:bg-slate-200 hover:cursor-pointer"
        >
          <h2>
            {todo.id} - {todo.todo}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default TodoPage;
