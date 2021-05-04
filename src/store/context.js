import React, {createContext, useContext, useReducer} from 'react'
import {useHistory} from 'react-router-dom'


const AppContext = createContext();

const initialState = {
    showsignin: false,
    showsignup: false
}
const reducer = (state,action) => {
    switch (action.type){
        case 'showsignin':
            return {
                showsignin: true
            }
        case 'showsignup':
            return {
                showsignup: true
            }
        default:
            return "Default"
    }
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const history = useHistory()
    console.log(history);

    function goTopage(path) {
        console.log(path);
        history.push(path)
    }

    return(
        <AppContext.Provider value={{state, dispatch,goTopage}}>
            {props.children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export { AppProvider, useAppContext}