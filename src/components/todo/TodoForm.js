import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo, clearCompleted, handleInputChange, todoInput }) {
    const styles = makeStyles(theme => ({
        root: {
            width: '500px',
            margin: '0 auto',
            marginTop: '50px',
            marginBottom: '40px',
        },
        input: {
            display: 'block',
            width: '100%'
        },
        button: {
            display: 'block',
            width: '100%',
            margin: '10px 0'
        }
    }))();

    return (
        <div className={styles.root}>
            <form>
                <TextField
                    className={styles.input}
                    type="text"
                    name="todo"
                    label="Add todo..."
                    variant="outlined"
                    onChange={handleInputChange}
                    value={todoInput}
                />
                <Button className={styles.button} variant="contained" color="primary" onClick={addTodo}>
                    Add Todo
                </Button>
                <Button
                    className={styles.button}
                    variant="contained"
                    color="primary"
                    onClick={clearCompleted}
                >
                    Clear Completed
                </Button>
            </form>
        </div>
    );
}

export default TodoForm;
