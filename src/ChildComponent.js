import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <br></br>
            <button onClick={() => props.greetHandler(`Aman`)}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
