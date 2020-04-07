import React from "react"

class TodoForm extends React.Component {
    //constructor with state
    constructor(){
        super()
        this.state = {
            name: ""
        }
    }

    handlesChanges = e => {
        //update state with each keystroke
        e.preventDefault()
        this.setState({
            newItem: e.target.value
        })
    }

    //class property to submit form
    submitForm = e => {
        e.preventDefault()
        this.props.addNewItem(this.state.newItem)
    }

    render(){
        console.log("rendering form")
        return (
            <form onSubmit={this.submitForm}>
                <input name="name" 
                placeholder="Add item" 
                value={this.state.name} 
                onChange={this.handlesChanges}/>
                <button>Add</button>
            </form>
        )
    }//end of render
}//end of TodoForm

export default TodoForm