import React from "react";
import "./Todo.css";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

function Todo({ task, toggleCompleted }) {
    const styles = makeStyles(theme => ({
        task: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px',
            height: '40px'
        }
    }))();

    return (
        <Chip
            className={`task ${styles.task}`}
            iscompleted={task.completed ? "true" : "false"}
            onClick={() => toggleCompleted(task.id)}
            disabled={task.completed}
            label={task.title}
            color="primary"
        />
    );
}

export default Todo;
