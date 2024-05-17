export default function ColorList({ colors }) {
    return (
        <ul>          
            {colors.map(color => <li style={{color}}>{color}</li>)}
        </ul>
    );
}