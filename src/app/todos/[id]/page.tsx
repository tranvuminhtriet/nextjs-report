import TodoContent from "@/components/todo-content";
import { Suspense } from "react";

const TodoItemPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div className="h-full flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-4">Todo {id}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <TodoContent id={id} />
      </Suspense>
    </div>
  );
};
export default TodoItemPage;
