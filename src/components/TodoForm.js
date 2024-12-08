import React, { useState, useEffect } from "react";

function TodoForm({ addTodo, isEditing, currentTodo, saveTodo }) {
  const [todoText, setTodoText] = useState("");

  // Nếu đang sửa todo, thiết lập giá trị của todoText là giá trị của todo đang sửa
  useEffect(() => {
    if (isEditing && currentTodo) {
      setTodoText(currentTodo.text);
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText) return;

    if (isEditing) {
      // Nếu đang sửa, gọi saveTodo để lưu thay đổi
      saveTodo({ ...currentTodo, text: todoText });
    } else {
      // Nếu không, gọi addTodo để thêm mới
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      addTodo(newTodo);
    }

    setTodoText(""); // Reset input sau khi thêm/sửa
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder={isEditing ? "Edit your task" : "Add a new task"}
      />
      <button type="submit">{isEditing ? "Save" : "Add"}</button>
    </form>
  );
}

export default TodoForm;
