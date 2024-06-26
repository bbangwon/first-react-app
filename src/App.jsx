import './App.css'
// import Greeter from './Greeter';
// import Die from './Die';
// import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
// import ShoppingList from './ShoppingList';
// import PropertyList from './PropertyList';
// import Clicker from './Clicker';
// import Form from './Form';
// import Counter from './Counter';
// import Toggler from './Toggler';
// import ToggleCounter from './ToggleCounter';
import ColorBoxGrid from './ColorBoxGrid';

// const data = [
//   {id: 1, item: 'eggs', quantity: 12, completed: false},
//   {id: 2, item: 'milk', quantity: 1, completed: true},
//   {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
//   {id: 4, item: 'carrots', quantity: 12, completed: true}
// ]

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ]

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",  
];

function App() {
  return (
  <div>
    <ColorBoxGrid colors={colors}/>
    {/* <ToggleCounter />
    <Toggler />
    <Counter /> */}
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
    {/* <Form />
    <PropertyList properties={properties} />
    <Clicker message="HI!!!!" buttonText="Click Me" /> */}
  </div>
  );
}

export default App
