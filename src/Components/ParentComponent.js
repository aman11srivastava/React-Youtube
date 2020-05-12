import React, { Component } from 'react'
import ChildComponent from '../ChildComponent.js'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parents'
        }

        this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${childName}'s ${this.state.parentName}!  So, how can I help you? `)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;
