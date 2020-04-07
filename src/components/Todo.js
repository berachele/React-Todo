import React from "react"

const Todo = props => {
    return (
        <div onClick={()=> props.toggleItem(props.item.id)} //clicking will make item to = true (or completed)
        className={`item${props.item.complete ? ' complete' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo