import React, {Component} from 'react';

// In this file, we have only created CLASS ComponentS
//We can generate the same output using FUNCTIONAL Components also.
//Check Greet.js for FUNCTIONAL Components


	// METHOD 3   -> It is a CLASS Component
class Welcome extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello Duniya  (CLASS Component)</h1>,
				<h1>Mai hoon {this.props.name} a.k.a {this.props.heroName} (CLASS Component)</h1>

			</div>
		);
	}
}

//METHOD 4  -> It is also a CLASS Component
// class Welcome extends React.Component{
// 	render(){
// 		return <h1>Namaskar Mitron</h1>
// 	}
// }

export default Welcome;
