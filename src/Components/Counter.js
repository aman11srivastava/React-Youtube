import React , { Component } from 'react';

 class Counter extends Component{

	 constructor(){
		 super()
		 this.state={
			 count:0,
			 msg: "Welcome Visitor"
 	}
}
	  sub(){
		 this.setState({
			 msg: "Thank you for Subscribing!",
			 count:this.state.count+1
		 })
	 }
	  render(){
		 return(
			 <div>
			 	<h1>Subscriber count: {this.state.count}</h1>
				<h1>{this.state.msg}</h1>
				<button onClick={()=>this.sub()}>Subscribe</button>
			 </div>
		 );
	 }
 }

 export default Counter;
