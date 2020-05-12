import React from 'react';
import './style.css';


// In this file, we have only created FUNCTIONAL ComponentS
//We can generate the same output using CLASS Components also.
//Check Welcome.js for CLASS Components


//Different methods displaying same outputs

//  METHOD 1   ->It is FUNCTIONAL Component
// function Greet(){
// 	return (
// 		<div>
// 			<h1>Hello Aman (FUNCTIONAL Component)</h1>
// 			<br></br>
// 		</div>
// 	)
// }

// METHOD 2  -> It is also a FUNCTIONAL Component
// const Greet=() => <h1>Hello World</h1>

const Greet=(props) => {
	console.log(props);
	return (
		<div>
			<h1>
				Hello {props.name}  a.k.a  {props.heroName}
			</h1>
			{props.children}
		</div>
	)
}


export default Greet;
