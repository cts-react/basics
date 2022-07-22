import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

//action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO';
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
export default function Counter() {
    const reduxState = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <div>Count: {reduxState.counter}</div>
        </div>
    );
}



