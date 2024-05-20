import { useState } from 'react';

export default function Counter() {    
    const [num, setNum] = useState(5); //useState 훅 사용
    console.log("COMPONENT HAS BEEN EXECTUED AGAIN!");
    console.log(`num is ${num}`);

    const changeNum = () =>{ 
        setNum(num + 1); //setNum을 사용하여 num을 증가시킴
        console.log("SET NUM HAS RUN!");
        console.log(`num is now ${num}`);
    }
    return (
        <div>
            <p>The count is: {num} </p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}