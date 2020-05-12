import React from 'react'

function Column() {
    const items=[1,2,3,4,5,6]
    return (
        <React.Fragment>
            {
                items.map(item => (
                 <React.Fragment  key={item}>
                     <p>{item}</p>
                     <p>Aman Srivastava</p>
                 </React.Fragment>
                ))
            }
            <td><h1>Name</h1></td>
            <td><h3>Aman</h3></td>
        </React.Fragment>
    )
}

export default Column
