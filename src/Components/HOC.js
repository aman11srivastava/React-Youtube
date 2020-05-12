import React , {Component} from 'react'

const UpdatedComponent= (OriginalComponent) => {
    class NewComponent extends Component{
        constructor(props) {   // The state and the incrementCount method are the two functionalities that were common in both the components, therefore it is kept under the updatedComponent and removed from both the components
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount =()=>{
            this.setState(prevState => {
                return {count: prevState.count+1}
            })  // Since previous state will be reqd to increment the value of count, therefore it cannot be an object. Instead it takes a function which gets previous state as a parameter and returns the new state
        }
        render(){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent

 //updatedComponent is a function that takes the original component as a parameter and returns the updatedComponent