import { useState } from "react";


export default  function Parent() {
    const [words, setWords] = useState("");
  
    const handleClick = () => {
      setWords("Did you do your homework?");
    };
  
    return (
      <div>
        <h1>Parent</h1>
        <button onClick={handleClick}>Ask</button>
        <Child hears={words} />
      </div>
    );
  }
  
  function Child(props) {
    //   props.hears = 'child is trying to modify';
    return (
      <div>
        <h2>Child</h2>
        <p>{props.hears}</p>
      </div>
    );
  }