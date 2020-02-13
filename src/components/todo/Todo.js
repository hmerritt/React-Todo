import React from "react";
import "./Todo.css";

function Todo({ task }) {
    return (
        <div className="task">
            <h1>{task.title}</h1>
        </div>
    );
}

export default Todo;
