import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((i) => (
                    <ShoppingListItem key={i.id} {...i} />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;