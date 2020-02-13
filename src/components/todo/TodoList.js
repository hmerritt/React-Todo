import React from "react";
import Todo from './Todo';

function TodoList({ tasks }) {
    return (
        <div className='tasks'>
            {
                tasks.map((task, key) => {
                    return <Todo key={key} task={task} />
                })
            }
        </div>
    );
}

export default TodoList;
