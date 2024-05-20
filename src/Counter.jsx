import { useState } from 'react';

export default function Counter() {    
    const [num, setNum] = useState(5); //useState 훅 사용
    const changeNum = () => setNum(num + 1); //setNum을 사용하여 num을 증가시킴
    return (
        <div>
            <p>The count is: {num} </p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}