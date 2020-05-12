import React, { Component } from 'react';

class EventBind extends Component{

	constructor(){
		super()
		this.state={
			message: "Welcome"
		}

		{/* this.abc=this.abc.bind(this)  //yEH HAI WOH LINE  ---> CALLED BINDING IN THE CLASS constructor. ALSO IN OFFICIAL REACT DOCS   */}
	}

	//
	// abc(){
	// 	this.setState({
	// 		message: "Hello Sir"
	// 	})
	// 	console.log(this);
	// }

	abc1 =() => {
		this.setState({
			message: 'Hello Sir'
		})
	}



	render(){
		return(
			<div>
				<h2>{this.state.message}</h2>
				{/*<button onClick={this.abc.bind(this)}>Method 1</button  //Method 1 for EVENT BINDING  --->> called Binding in render ()  */}
				{/*<button onClick={()=>this.abc()}>Method 2</button>    METHOD 2 FOR EVENT BINDING  --->> called Arrow function in render()  */}
				{/* <button onClick={this.abc}>Method 3</button>  METHOD 3. EXTRA LINE ADDED IN constructor. GO CHECK IT -->> called BINDING in class constructor*/}
				<button onClick={this.abc1}>Method 4</button>  {/*In this method, we create an arrow function instead of a regular function  --->> called class property as arrow functionn */}



			</div>
		)
	}
}
export default EventBind;
