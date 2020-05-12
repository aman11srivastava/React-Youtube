import React, { Component } from 'react'
// import RegularComp from './RegularComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:"Anam"
        }
    }

    //What the Pure Component is to Class components is just like what Memo is to Functional Components

    componentDidMount(){
        setInterval(()=>{   
            this.setState({
                name:'Anam'
            })
        },2000)
    }
    render() {
        console.log("--------PARENT COMPONENT RENDER-----------")
        return (
            <div>
                Parent Component        
                {/* <RegularComp name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/>     */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
