import { useState } from "react";

export default function ToggleCounter() {
    const [isOn, setIsOn] = useState(false);
    const [count, setCount] = useState(0);

    const toggle = () => setIsOn(!isOn);
    const inrementCount = () => setCount(count + 2);

    return (
        <div>
            <button className="Toggler" onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
            <p>{count}</p>
            <button onClick={inrementCount}>+</button>
        </div>
    );
}