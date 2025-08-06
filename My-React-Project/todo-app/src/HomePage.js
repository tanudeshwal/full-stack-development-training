function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 flex justify-center items-center px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-10 border border-red-300 text-center max-w-xl w-full">
                <h1 className="text-4xl font-extrabold text-red-600 mb-2">📋 My Todo App</h1>
                <p className="text-lg text-gray-600">Organize your day, one task at a time.</p>
            </div>
        </div>
    );
}

export default HomePage;
