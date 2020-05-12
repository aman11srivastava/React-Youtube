import React, { Component } from 'react'
import UpdatedComponent from 'HOC'

class HOCclickCounter extends Component {
    render() {
        const {count, incrementCount}=this.props
        return (
            <div>
                <br></br>
                <button onClick={incrementCount}>Clicked {count} times</button>                
            </div>
        )
    }
}
export default UpdatedComponent(HOCclickCounter)





//------WITHOUT USING THE CONCEPT OF HIGHER ORDER COMPONENTS-----------


// import React, { Component } from 'react'

// class HOCclickCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     incrementCount =()=>{
//         this.setState(prevState => {
//             return {count: prevState.count+1}
//         })  //Since previous state will be reqd to increment the value of count, therefore it cannot be an object. Instead it takes a function which gets previous state as a parameter and returns the new state
//     }
    
//     render() {
//         const {count}=this.state
//         return (
//             <div>
//                 <br></br>
//                 <button onClick={this.incrementCount}>Clicked {count} times</button>                
//             </div>
//         )
//     }
// }

// export default HOCclickCounter
