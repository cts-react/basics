import { useState } from "react";


export default function ButtonComponent(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // Incrementing the count
        setCount(count++)
    }

    return <button onClick={handleClick}>{count}
    </button>
}