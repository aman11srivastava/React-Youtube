import React from 'react'
import Person from './Person'

function Name() {

    const names=["Aman","Anam","Abc","Aman"];
   
    // const nameList=[
    //     {
    //         id: 1,
    //         name: "Aman",
    //         age:22,
    //         skill: "React JS"
    //     },
    //     {
    //         id: 2,
    //         name: "Anam",
    //         age:18,
    //         skill: "C++"
    //     },
    //     {
    //         id: 3,
    //         name: "Arastu",
    //         age:22,
    //         skill: "HTML 5"
    //     },
    //     {
    //         id: 4,
    //         name: "Ojas",
    //         age:21,
    //         skill: "Pyhton"
    //     }
    // ]


const newName= names.map((simple,index)=> <h4 key={index}>{simple} -> {index} </h4>)

    // const naaam=nameList.map(info=> <Person key={info.id} info={info}/>)  //info is passed as a prop in the person component 

    return (
        <div>

            {/* {naaam} */}
            {newName}            
        </div>
    )
}

//the Name component is now only responsible for rendering the list 

export default Name


