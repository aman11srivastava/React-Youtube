import React from 'react'

function ErrorBoundary({heroName}) {
    if(heroName ==="Joker"){
        throw new Error("Not a Hero!")
    }
    else;
    return (
        <div>
            {heroName}
        </div>
    )
}
export default ErrorBoundary



