import React, { Component } from 'react'

class DemoRefs extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()   //Creates a Ref Object
    }
    
    componentDidMount(){
        this.inputRef.current.focus()   //Refs are used so that as soon as the page loads, the focus is sent to the username input text box without mouse click and the user can start inserting his/her details straight away.

        ///Focus() is used to target that input for which we want the Ref to focus.
    }

    testingRefs=()=>{
        alert("Login Successful! Welcome " +this.inputRef.current.value+"!")   //will alert the value passed inside the text box
    }

    render() {
        return (
            <div>
                <label>Username:</label> 
                <input type="text" ref={this.inputRef}/>
                <br></br>
                <label>Password:</label>
                <input type="password"/> <br></br>
                <button onClick={this.testingRefs}>Test</button>
            </div>
        )
    }
}

export default DemoRefs
