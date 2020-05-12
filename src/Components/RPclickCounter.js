import React, { Component } from 'react'

class RPclickCounter extends Component {
    render() {
        const {count, incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}o9><h3>Clicked {count} times</h3></button>
            </div>
        )
    }
}

export default RPclickCounter
 