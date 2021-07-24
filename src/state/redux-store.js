import { createStore } from "redux"

const initialState = {
    possibleModes: [{name: 'Focus', time: 45},
                     {name: 'Rest', time: 15}],
    currentMode: 'Focus',
    isActive: false
}

function reducer(state, action) {
    if (action.type === 'SET_ACTIVE_FLAG') {
        return {... state, isActive: action.value}
    }

    else if (action.type === 'SET_CURR_MODE') {
        return {...state, currentMode: action.newMode}
    }

    else if (action.type === 'SET_MODE_DURATION') {
        return {...state, currentMode: action.duration}
    }

    return state
}

export default createStore(reducer,
                           initialState,
                           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())