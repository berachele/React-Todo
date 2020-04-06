import React from "react"

class TodoForm extends React.Component {
    //constructor with state
    

    handlesChanged = e => {
        //update state with each keystroke
    }

    //class property to submit form

    render(){
        console.log("rendering form")
        return (
            <form>
                <input name="item" placeholder="Add item" />
                <button>Add</button>
            </form>
        )
    }//end of render
}//end of TodoForm

export default TodoForm