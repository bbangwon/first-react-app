function ShoppingList({ items }) {
    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((i) => (
                    <li style={{
                        color: i.completed ? "gray" : "red",
                        textDecoration: i.completed ? "line-through" : "none"
                    }}>
                        {i.item} - {i.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;