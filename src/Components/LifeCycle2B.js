import React, { Component } from 'react'

class Lifecycle2B extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Aman"
        }
        console.log("Lifecyle2B Constructor");   
    }
    static getDerivedStateFromProps(props,state){  
        console.log("LifeCycle2B  getDerivedStateFromProps")
        return null  

    }
    
    componentDidMount(){
        console.log("LifeCycle2B componentDidMount ")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycle2B getSnapshotBeforeUpdate")
        return null
    }
    shouldComponentUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycle2B shouldComponentUpdate ")
        return true
    }

    componentDidUpdate(){
        console.log("LifeCycle2B componentDidUpdate")
    }



    render() {
        console.log("Lifecyle2B render")
        return (
            <div>
                Lifecycle2B
            </div>
        )
    }
}

export default Lifecycle2B
