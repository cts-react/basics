import React from "react";


export default function ExampleForm() {
    const inputRef = React.useRef({name:'ram', age:34});
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputRef.current);
      console.log(inputRef.current.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef.name} value={inputRef.name}/>
        <input type="text" ref={inputRef.age} />
        <button>Submit</button>
      </form>
    );
  }
  