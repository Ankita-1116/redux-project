import React from 'react'

const intialState={
    userType:''
}

export const Reducer = (state: any = intialState, action: any) => {
    switch(action.type) {
        case 'ADD':
            return Object.assign({}, state, action)
        case "RESET":
          return intialState;
    
       default: 
          return state; 
      }
}