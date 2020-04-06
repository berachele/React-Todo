import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


const items = [
  {
    name: "Do the dishes",
    complete: false,
    id: 1234
  },
  {
    name: "Vacuum",
    complete: false,
    id: 1223
  },
  {
    name: "Sort the laundry",
    complete: false,
    id: 1141
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h1>My To Do List:</h1>
          <TodoForm/>
        </div>
        <TodoList items={items} />
      </div>
    );
  }
}

export default App;
