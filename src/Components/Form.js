import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: " ",
            topic:"React",
            area: " "       
            
        }
    }

    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })  
    }

    handleTopicChange=(event)=>  {
        this.setState({
            topic: event.target.value
        })
    }

    handleAreaChange =(event) =>{
        this.setState({
            area: event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        alert("PLease confirm your details.")
        alert(`Username=${this.state.username}
        Special comments=${this.state.area} 
        Skill=${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <br></br>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    <br></br>
                    <label>Comments</label>
                    <textarea value={this.state.area} onChange={this.handleAreaChange }/>
                    <br></br>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br></br>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
