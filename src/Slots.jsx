export default function Slots({ s1, s2, s3 }) {
    const isWinner = s1 === s2 && s2 === s3;
    const styles = {color: isWinner? "green": "red"};

    return (
        <div className="Slots" style={styles}>
            <h1>Slots</h1>
            {isWinner && <h2>You Win!</h2>}
            <h1>
                {s1} {s2} {s3}
            </h1>
        </div>
    );
}