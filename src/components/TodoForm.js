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
        this.setState({
            name: e.target.value
        })
    }

    //class property to submit form

    render(){
        console.log("rendering form")
        return (
            <form>
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