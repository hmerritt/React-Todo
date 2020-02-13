import React from "react";
import "./Todo.css";

function Todo({ task, toggleCompleted }) {
    return (
        <div className="task" iscompleted={task.completed ? 'true' : 'false'} onClick={() => toggleCompleted(task.id)}>
            <h1>{task.title}</h1>
        </div>
    );
}

export default Todo;
