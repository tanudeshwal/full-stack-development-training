function ShowTodoPage(props) {
    let todoArr = props.todo;

    function handleClick(e, todoId) {
        let newTodoArr = [];

        for (let i = 0; i < todoArr.length; i++) {
            newTodoArr[i] = { ...todoArr[i] }; // ✅ safer copy

            if (todoArr[i].id === todoId) {
                newTodoArr[i].status = "completed";
                newTodoArr[i].completedDate = new Date();
            }
        }

        props.setTodo(newTodoArr);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-6xl overflow-x-auto bg-white p-6 rounded-2xl shadow-2xl border border-purple-300">
                <h1 className="text-3xl font-extrabold text-center mb-8 text-purple-600">📝 Pending Todos</h1>

                <table className="min-w-full text-sm text-left text-gray-800 border-collapse">
                    <thead className="bg-purple-200 text-purple-900 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 border-b">Todo Title</th>
                            <th className="px-6 py-3 border-b">Status</th>
                            <th className="px-6 py-3 border-b">Due Date</th>
                            <th className="px-6 py-3 border-b">Mark Done</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            todoArr.filter(todo => todo.status === "pending").length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-6 text-gray-500 italic">
                                        No pending todos. You're all caught up! 🎉
                                    </td>
                                </tr>
                            ) :
                                todoArr.map((todo, index) => (
                                    todo.status === "pending" && (
                                        <tr
                                            key={todo.id}
                                            className={index % 2 === 0 ? "bg-purple-50 hover:bg-purple-100" : "bg-white hover:bg-purple-50"}
                                        >
                                            <td className="px-6 py-3 border-b font-medium">{todo.todoTitle}</td>
                                            <td className="px-6 py-3 border-b capitalize text-yellow-700 font-semibold">{todo.status}</td>
                                            <td className="px-6 py-3 border-b">{todo.dueDate}</td>
                                            <td className="px-6 py-3 border-b">
                                                <button
                                                    onClick={(e) => handleClick(e, todo.id)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg shadow transition"
                                                >
                                                    ✅ Done
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowTodoPage;
