import './App.css'
// import Greeter from './Greeter';
// import Die from './Die';
// import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
// import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';

// const data = [
//   {id: 1, item: 'eggs', quantity: 12, completed: false},
//   {id: 2, item: 'milk', quantity: 1, completed: true},
//   {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
//   {id: 4, item: 'carrots', quantity: 12, completed: true}
// ]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
]

function App() {
  return (
  <div>
    {/* <Greeter person="Bill" from="Colt" />
    <Greeter person="Ted" from="Colt" />
    <Greeter from="Elton" />
    <Die numSides={20} />
    <Die />
    <Die numSides={10} /> */}
    {/* <ListPicker values={['first', 'second', 'third']} /> */}
    {/* <Heading color="magent" text="Welcome!" fontSize={40}/>
    <Heading text="Welcome" fontSize={30}/>
    <Heading color="blue" text="Welcome!" fontSize={20} />
    
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />

    <ColorList colors={["red", "blue", "green", "yellow"]} />
    <ColorList colors={["#333", "#666", "#999", "#CCC"]} /> */}

    {/* <Slots s1="🍉" s2="🍉" s3="🍇" />
    <Slots s1="🍉" s2="🍉" s3="🍉" /> */}
    {/* <ShoppingList items={data} /> */}
    <PropertyList properties={properties} />
    <Clicker />
  </div>
  );
}

export default App
