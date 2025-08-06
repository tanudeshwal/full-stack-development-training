function DoneTodoPage(props) {
    let todoArr = props.todo;

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-5xl overflow-x-auto bg-white p-6 rounded-2xl shadow-2xl border border-purple-200">
                <h1 className="text-3xl font-extrabold text-center mb-8 text-purple-700">✅ Completed Todos</h1>

                <table className="min-w-full text-sm text-left text-gray-800 border-collapse">
                    <thead className="bg-purple-200 text-purple-900 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 border-b">Todo Title</th>
                            <th className="px-6 py-3 border-b">Status</th>
                            <th className="px-6 py-3 border-b">Completed On</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            todoArr.filter(todo => todo.status === "completed").length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="text-center py-6 text-gray-500 italic">
                                        No completed todos yet!
                                    </td>
                                </tr>
                            ) :
                                todoArr.map((todo, index) =>
                                    todo.status === "completed" && (
                                        <tr
                                            key={todo.id}
                                            className={index % 2 === 0 ? "bg-purple-50 hover:bg-purple-100" : "bg-white hover:bg-purple-50"}
                                        >
                                            <td className="px-6 py-3 border-b font-medium">{todo.todoTitle}</td>
                                            <td className="px-6 py-3 border-b capitalize text-green-600 font-semibold">{todo.status}</td>
                                            <td className="px-6 py-3 border-b">
                                                {todo.completedDate
                                                    ? new Date(todo.completedDate).toLocaleDateString()
                                                    : '—'}
                                            </td>
                                        </tr>
                                    )
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DoneTodoPage;
