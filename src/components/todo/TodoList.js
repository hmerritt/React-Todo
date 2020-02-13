import React from "react";
import Todo from './Todo';

function TodoList({ tasks, toggleCompleted }) {
    return (
        <div className='tasks'>
            {
                tasks.slice().reverse().map((task, key) => {
                    return <Todo key={key} task={task} toggleCompleted={toggleCompleted} />
                })
            }
        </div>
    );
}

export default TodoList;
