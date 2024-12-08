import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import "./App.css";
function App() {
  // Lấy dữ liệu từ LocalStorage khi tải trang
  const getTodosFromLocalStorage = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  };

  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const [isEditing, setIsEditing] = useState(false); // Kiểm tra nếu đang chỉnh sửa
  const [currentTodo, setCurrentTodo] = useState(null); // Todo hiện tại đang được chỉnh sửa

  // Cập nhật dữ liệu vào LocalStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Thêm todo mới
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Xóa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Cập nhật trạng thái hoàn thành của todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Chỉnh sửa todo
  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit); // Lấy todo đang được chọn để chỉnh sửa
    setIsEditing(true); // Đánh dấu là đang trong chế độ sửa
  };

  // Lưu thay đổi khi chỉnh sửa todo
  const saveTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setIsEditing(false); // Kết thúc chế độ sửa
    setCurrentTodo(null); // Xóa todo đang được sửa
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm
        addTodo={addTodo}
        isEditing={isEditing}
        currentTodo={currentTodo}
        saveTodo={saveTodo}
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
