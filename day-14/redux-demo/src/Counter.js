import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

//action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO';
//action creators
function increment(name) {
    //logic
    return { //action 
        type: INCREMENT
    };
}
function decrement() {
    return { type: DECREMENT };
}
export default function Counter() {
    const reduxState = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(reduxState);
    return (
        <div>
            <div>Count: {reduxState.counter}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}



