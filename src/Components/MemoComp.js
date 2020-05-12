import React from 'react'

function MemoComp({name}) {
    console.log("Rendering Memo Component")
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

   //What the Pure Component is to Class components is just like what Memo is to Functional Components


export default React.memo(MemoComp)
