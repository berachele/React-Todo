// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"

const TodoList = props => {

    return (
        <div>
            {props.items.map(item => {
                return <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            })}
            <button className="clear-btn" onClick={props.clearFinished}>Remove Finished Items</button>
        </div>
    )
}

export default TodoList