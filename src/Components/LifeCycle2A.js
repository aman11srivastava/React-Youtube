import React, { Component } from 'react'
import LifeCycle2B from './LifeCycle2B.js'

class Lifecycle2A extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Aman"
        }
        console.log("Lifecyle2A Constructor");   
    }
    static getDerivedStateFromProps(props,state){  
        console.log("LifeCycle2A  getDerivedStateFromProps")
        return null  
    }
    
    componentDidMount(){
        console.log("LifeCycle2A componentDidMount ")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycle2A getSnapshotBeforeUpdate")
        return null
    }
    shouldComponentUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycle2A shouldComponentUpdate ")
        return true
    }

    componentDidUpdate(){
        console.log("LifeCycle2A componentDidUpdate")
    }

    changeState =() => {
        this.setState ({
            name:"Aman The Greatest Great"
        })
    }


    render() {
        console.log("Lifecyle2A render")
        return (
            <div>
                Lifecycle2A
                <br></br>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycle2B/>
            </div>
        )
    }
}

export default Lifecycle2A
