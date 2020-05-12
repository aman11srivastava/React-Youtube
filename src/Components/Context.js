import React, { Component } from 'react'

const userContext=React.createContext()
//This object creates a Provider and a Consumer React Component

const UserProvider=userContext.Provider  //Assigning simpler names to the provider and consumer components
const UserConsumer=userContext.Consumer

export {UserProvider , UserConsumer }