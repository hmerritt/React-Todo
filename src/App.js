import React from "react";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";

class App extends React.Component {
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {
            tasks: []
        };
    }

    render() {
        return (
            <div>
                <h2>Welcome my Todo App!</h2>

                <TodoList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
