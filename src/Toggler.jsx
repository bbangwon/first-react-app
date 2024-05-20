import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => setIsOn(!isOn);
    return (
        <button className="Toggler" onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
    );
}