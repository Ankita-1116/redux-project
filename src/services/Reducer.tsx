import React from 'react'

const intialState={
    userType:'',
    header:{back:true,heading:"",rootPage:false}
}

export const Reducer = (state: any = intialState, action: any) => {
    switch(action.type) {
        case 'ADD':
            return Object.assign({}, state, action)
        case "RESET":
          return intialState;
        case "HEADER_OBJ":
            return Object.assign({}, state, action)
    
       default: 
          return state; 
      }
}