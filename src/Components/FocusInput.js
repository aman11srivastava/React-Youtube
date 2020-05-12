import React, { Component } from 'react'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.createComponentRef=React.createRef()
    }

    focusComponent(){
        this.createComponentRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.createComponentRef}/>
            </div>
        )
    }
}
export default FocusInput
