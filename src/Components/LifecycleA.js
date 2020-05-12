import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB.js'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Aman"
        }
        console.log("LifecyleA Constructor");   
    }
    static getDerivedStateFromProps(props,state){  //Returns null or the object that represents the updated state, i.e., setState value, of the component    Rarely used 
        console.log("LifeCycleA  getDerivedStateFromProps")
        return null  

    }
    
    componentDidMount(){
        console.log("LifeCycleA componentDidMount ")
    }

    render() {
        console.log("LifecyleA render")
        return (
            <div>
                LifecycleA
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA
