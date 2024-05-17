import './App.css'
// import Greeter from './Greeter';
// import Die from './Die';
// import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
import ShoppingList from './ShoppingList';

const data = [
  {item: 'eggs', quantity: 12, completed: false},
  {item: 'milk', quantity: 1, completed: true},
  {item: 'chicken breasts', quantity: 4, completed: false},
  {item: 'carrots', quantity: 12, completed: true}
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
    <ShoppingList items={data} />
  </div>
  );
}

export default App
