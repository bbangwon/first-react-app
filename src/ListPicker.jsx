export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randomValue = values[randIdx];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Randomly selected value: {randomValue}</p>
        </div>

    );
}