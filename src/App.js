import React from "react";

class App extends React.Component {
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
            </div>
        );
    }
}

export default App;
