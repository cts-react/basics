import { useState } from "react";
import { createStore } from "redux";
//action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = 'ADD_TODO';
//action creators
function increment(name) {
    return { //action 
        type: ADD_TODO,
        payload: { text: name }
    };
}
function decrement() {
    return { type: DECREMENT };
}
//reducer
function reducer(state = { counter: 10 }, action) {
    //global logic
    switch (action.type) {
        case ADD_TODO:
            return { ...state, datafromComponent: action.payload }
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

//store
var store = createStore(reducer, enableDevTools());


export default function LogState() {//component
    // const [name, setName] = useState();//local state  //TODO
    return (
        <div>
            <button onClick={(event) => store.dispatch(increment('Pariwesh'))}>Increment</button>
            <button onClick={() => store.dispatch(decrement())}> Decrement</button>
        </div>
    )
}

store.subscribe(LogState);//register

function enableDevTools() {
    return (
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
// store.dispatch({ type: '' });
// store.dispatch(increment());
// store.dispatch(decrement());