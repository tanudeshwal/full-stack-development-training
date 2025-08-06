import { useState } from 'react';

function AddTodoPage(props) {
    let todo = props.todo;
    let setTodo = props.setTodo;

    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted, data = " + JSON.stringify(formData));

        setTodo(prevTodos => [
            ...prevTodos,
            {
                id: Date.now(),
                todoTitle: formData.todoTitle,
                dueDate: formData.dueDate,
                status: formData.status,
                completedDate: '',
            }
        ]);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-purple-200 flex justify-center items-center px-4 py-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-pink-300"
            >
                <h1 className="text-3xl font-extrabold text-center mb-8 text-pink-700">
                    ✍️ Add New Todo
                </h1>

                <div className="mb-5">
                    <label className="block text-gray-700 mb-1 font-medium">Todo Title</label>
                    <input
                        type="text"
                        name="todoTitle"
                        placeholder="Enter your todo title"
                        value={formData.todoTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1 font-medium">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                    ➕ Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodoPage;
