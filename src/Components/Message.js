import React, {Component} from 'react';

class Message extends Component{

	constructor(){
		super()  //super() will calls the constructor of its parent class. This is required when you need to access some variables from the parent class.
		this.state={
			msg: "Welcome Visitor"
		}
		// this.state={
		// 	msg: "Thank you for Subscribing!"
		// }
	}

	changeMsg(){
		this.setState({
			msg: "Thank you for Subscribing!"
		})
	}
	//
	// changeAgain(){
	// 	this.setState({
	// 		msg:"Sorry for inconvinience. Hope to see you again"
	// 	})
	//  }

	render(){
		return (
			<div>
				<h1>{this.state.msg}</h1>
				<button onClick={()=> this.changeMsg()}>Subscribe</button>
			</div>
		);
	}
}

export default Message;
