import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./components/Todo.css"


const items = [
  {
    name: "Do the dishes",
    complete: false,
    id: 1234
  },
  {
    name: "Vacuum",
    complete: false,
    id: 1235
  },
  {
    name: "Sort the laundry",
    complete: false,
    id: 1236
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state={
      itemList: items
    }//end of this.state
  }//end of constructor

  //Class methods to update state
  toggleItem = clickedId => {
    //not mutating current state
    //for every array and object, create new one (..., or array methods)
    const newItemList = this.state.itemList.map(item=>{
      //loop through the array
      //find the item we clicked on (by id)
      //toggle that items completed property
      if(item.id === clickedId){
        //toggle completed item
        return {
          ...item,
          complete: !item.complete
        }
      }else {
        return item
      }
    })

    //update state with the new array using this.setState
    this.setState({
      itemList: newItemList
    })
  }//end of toggle

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      complete: false,
      id: Date.now()
    }
    this.setState({
      itemList: [...this.state.itemList, newItem]
    })
  }

  clearFinished = e => {
    e.preventDefault();
    //if item is complete (item.complete is true) then filter out
    this.setState({
      itemList: this.state.itemList.filter(item => !item.complete)
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>My To Do List:</h1>
          <TodoForm addNewItem={this.addNewItem}/>
        </div>
        <TodoList items={this.state.itemList} toggleItem={this.toggleItem} clearFinished={this.clearFinished} />
      </div>
    );
  }
}

export default App;