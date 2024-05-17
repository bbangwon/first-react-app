export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    return (
        <div>
            <h1>Double Dice</h1>
            {num1 === num2 && <h2>You Win!</h2>}
            <p>First die: {num1}</p>
            <p>Second die: {num2}</p>
        </div>
    );
}


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     return (
//         <div>
//             <h1>Double Dice</h1>
//             {num1 === num2 ? <h2>You Win!</h2> : null}
//             <p>First die: {num1}</p>
//             <p>Second die: {num2}</p>
//         </div>
//     );
// }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     return (
//         <div>
//             <h1>{num1 === num2 ? "You Win!" : "You Lose!"}</h1>
//             <p>First die: {num1}</p>
//             <p>Second die: {num2}</p>
//         </div>
//     );
// }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     const result = num1 === num2 ? "You Win!" : "You Lose!";

//     return (
//         <div>
//             <h1>{result}</h1>
//             <p>First die: {num1}</p>
//             <p>Second die: {num2}</p>
//         </div>
//     );
// }