import { useState } from "react";


export default function Parent1() {
    const [message, setMessage]=useState('');
    const handleRequest = (request) => {
        setMessage("set by Child");
    };
  
    return (
      <div data-testid='parent1'> 
        <h1>Parent</h1>
        <p data-testid='message1'>{message}</p>
        <Child1 onRequest={handleRequest} />
      </div>
    );
  }
  function Child1(props) {
    const handleClick = () => {
      props.onRequest("Can I have the car?");
    };
  
    return (
      <div data-testid='child1' >
        <h2>Child</h2>
        <button data-testid='child1Btn'  onClick={handleClick}>Ask for the car</button>
      </div>
    );
  }
  