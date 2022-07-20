import { useState } from "react";


export default function SliderComponent(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // Incrementing the count
        setCount(count++)
    }
    return <input type='range' onClick={handleClick} value={count}></input>;
}