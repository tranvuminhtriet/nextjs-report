const TodoPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const {id} = await params;
    return (
        <div>
            <h1>Todo {id}</h1>
        </div>
    )
}

export default TodoPage;
