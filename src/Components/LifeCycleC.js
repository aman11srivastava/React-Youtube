import React, { Component } from 'react'

class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Aman"
        }
        console.log("LifecyleC Constructor");   
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleC  getDerivedStateFromProps")
        return null

    }
    
    componentDidMount(){
        console.log("LifeCycleC componentDidMount ")
    }

    render() {
        console.log("LifecyleC render")
        return (
            <div>
                LifecycleC
            </div>
        )
    }
}

export default LifecycleC
