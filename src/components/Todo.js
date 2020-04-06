import React from "react"

const Todo = props => {
    return (
        <div className={`item${props.item.complete ? ' complete' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo