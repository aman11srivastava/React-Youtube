import React from 'react'
import ReactDom from 'react-dom'

function Portals() {
    return ReactDom.createPortal(
        <div>
            <h1>Portals Demo</h1>
        </div>,
        document.getElementById('portals-root')
    )
}

// ReactDom.createPortal() takes two parameters as Input. First parameter is the JSX that we want to render and the second parameter is the document. getElementById/by className etc, that shows the location of the portal name in the index.html


//We can clearly see that the <div> is the first parameter of create Portal method and then followed by comma (,) is the location of the portal div that is stored in the index.html 

export default Portals
