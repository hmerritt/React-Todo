import React from "react";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core/styles";

function TodoList({ tasks, toggleCompleted }) {
    const styles = makeStyles(theme => ({
        root: {
            width: "500px",
            margin: "0 auto"
        }
    }))();

    return (
        <div className={`tasks ${styles.root}`}>
            {tasks
                .slice()
                .reverse()
                .map((task, key) => {
                    return (
                        <Todo
                            key={key}
                            task={task}
                            toggleCompleted={toggleCompleted}
                        />
                    );
                })}
        </div>
    );
}

export default TodoList;
