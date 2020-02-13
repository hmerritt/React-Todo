import React, { useState } from "react";

function TodoForm({ addTodo, clearCompleted, handleInputChange, todoInput }) {
    return (
        <form>
            <input
                type="text"
                name="todo"
                placeholder="Add todo..."
                onChange={handleInputChange}
                value={todoInput}
            />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
