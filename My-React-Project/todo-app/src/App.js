import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import AddTodoPage from './AddTodoPage';
import ShowTodoPage from './ShowTodoPage';
import DoneTodoPage from './DoneTodoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [todo, setTodo] = useState([]);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-todo" element={<AddTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/show-todo" element={<ShowTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/done-todo" element={<DoneTodoPage todo={todo} setTodo={setTodo} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
