import React from "react"

const Todo = props => {
    return (
        <div //clicking will make item to = true (or completed)
        className={`item${props.item.complete ? ' complete' : ''}`}
        onClick={()=> props.toggleItem(props.item.id)} >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo