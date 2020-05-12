import React, {Component} from 'react';

class ClassClick extends Component{

	clicked(){
			document.write("<h2>Badhiyaa launde</h2>")
	}

	render(){
		return(
			<div>
				<button onClick={this.clicked}>Click kar mujhe</button>
			</div>
		)
	}
}

export default ClassClick;
