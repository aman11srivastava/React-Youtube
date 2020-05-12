import React from 'react'

function Person({info}) {  //destructuring of  the prop -> info  in the parameter
    return (
        <div>
            <h3>
                Good morning, My id is {info.id}, My name is {info.name}, I am {info.age} years old and my skills include {info.skill}. Thank You    
            </h3>
        </div>
    )
}

//person component is now only responsible for rendering the person html

export default Person
