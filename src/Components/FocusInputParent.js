import React, { Component } from 'react'
import FocusInput from './FocusInput'

class FocusInputParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef=React.createRef() 
    }

    clickHandler=() => {
        this.componentRef.current.focusComponent()
    }
    
    render() {
        return (
            <div>
                <br></br>
                <FocusInput ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default FocusInputParent
