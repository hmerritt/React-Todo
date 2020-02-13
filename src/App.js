import React from "react";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            todoInput: ""
        };
    }

    addTodo = event => {
        event.preventDefault();
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    title: this.state.todoInput,
                    id: Date.now(),
                    completed: false
                }
            ],
            todoInput: ""
        });
    };

    toggleCompleted = (todoId) => {
        this.setState({
          tasks: this.state.tasks.map(task => {
            if (todoId === task.id) {
              return {
                ...task,
                completed: !task.completed
              };
            }

            return task;
          })
        });
    }

    clearCompleted = event => {
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.filter( task => !task.completed )
        });
    }

    handleInputChange = event => {
        this.setState({ todoInput: event.target.value });
    };

    render() {
        return (
            <div>
                <h2>Welcome my Todo App!</h2>

                {/* Add todos */}
                <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} handleInputChange={this.handleInputChange} todoInput={this.state.todoInput} />

                {/* List todos */}
                <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} />
            </div>
        );
    }
}

export default App;
