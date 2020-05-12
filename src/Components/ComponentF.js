import React, { Component } from 'react'
import { UserConsumer } from './Context'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (username) => {
                            return <h1>Welcome {username}</h1>
                        }
                    }
                </UserConsumer>
                                
            </div>
        )
    }
}

export default ComponentF
