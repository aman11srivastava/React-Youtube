import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLockedIn: false
        }
    }
    
    
    render() {

        //----- METHOD 3 ---> TERNARY CONDITIONAL OPERATOR

        return this.state.isLockedIn ? (
            <div>Welcome Ji !</div>
        ) : (
            <div>Hello Ji !</div>
        )   



        
        //-----METHOD 2 --> ELEMENT VARIABLES

        // let message
        // if (this.state.isLockedIn){
        //     message=<div>
        //         <ul>
        //             <li>Pav</li>
        //             <li>Missal</li>
        //             <li>Vada</li>
        //         </ul>
        //     </div>
        // }
        //     else {
        //         message=<div>
        //             <ol>
        //                 <li>Pizza</li>
        //                 <li>Burger</li>
        //                 <li>Dosa</li>
        //                 <li>Nachos</li>
        //             </ol>
        //         </div>
        //     }

        // return <div>
        //     <h1>{message}</h1>
        // </div>


        //------ METHOD 1 ---> IF/ELSE BASIC WAALA 

        //if (this.state.isLockedIn){
          //  return <h1>Welcome Aman</h1>
        //}
        // else {
         //   return <h1>Who the hell you?</h1>
       // }
    }


}

export default UserGreeting
