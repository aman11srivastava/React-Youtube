import React, { Component } from 'react'
import LifeCycleC from './LifeCycleC.js'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Aman"
        }
        console.log("LifecyleB Constructor");   
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB  getDerivedStateFromProps")
        return null

    }
    
    componentDidMount(){
        console.log("LifeCycleB componentDidMount ")
    }

    render() {
        console.log("LifecyleB render")
        return (
            <div>
                LifecycleB
                <LifeCycleC/>
            </div>
        )
    }
}

export default LifecycleB
