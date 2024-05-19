function handleClick(){
    console.log("Button Clicked");
}

export default function Clicker(){
    return (
        <div>
            <p>Click the Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}