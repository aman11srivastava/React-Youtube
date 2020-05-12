import React, { Component } from 'react'


//Error Boundary catch errors during Rendering, in lifecycle methods and in the constructors of the whole tree below them.
//It can not be used to catch errors inside event handlers. For that purpose, we have to use the regular Try-Catch statements

class ErrorBoundary2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    //whenever an error is encountered while rendering any of the components in the react app, we set the state of the hasError property to true. 
    //This state property can be used to generate the fallback UI. 

    static getDerivedStateFromError(error){   
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){ //info -> information related to the error
        //This method is mainly used to 'log' the errors
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError){  // If the component has error, then return <h1>
            return <h1>Something went wrong.</h1>  //This is the Fallback UI.
        }
        return this.props.children
        //this.props.children -> the component that we actually want to render
    }
}

export default ErrorBoundary2
