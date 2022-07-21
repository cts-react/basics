import React from "react";


export default function ExampleForm() {
    const inputRef = React.useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputRef.current);
      console.log(inputRef.current.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    );
  }
  