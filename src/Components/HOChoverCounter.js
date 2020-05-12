import React, { Component } from 'react'
import UpdatedComponent from 'HOC'

class HOChoverCounter extends Component {
       
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>                
            </div>
        )
    }
}

export default UpdatedComponent(HOChoverCounter)





//------WITHOUT USING THE CONCEPT OF HIGHER ORDER COMPONENTS-----------


// import React, { Component } from 'react'

// class HOChoverCounter extends Component {
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
//                 <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>                
//             </div>
//         )
//     }
// }

// export default HOChoverCounter
