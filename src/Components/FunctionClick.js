import  React, { Component } from 'react';

function FunctionClick() {

	function letsNacho(){
		document.write("<h1>Kar dance khulla!!!</h1>")
	}
	return(
		<div>
			<br></br>
			<button onClick={letsNacho}>Lets Nacho!</button>
		</div>
	)

}

export default FunctionClick;
