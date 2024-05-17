import './App.css'
// import Greeter from './Greeter';
// import Die from './Die';
// import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';

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
    <Heading color="magent" text="Welcome!" fontSize={40}/>
    <Heading text="Welcome" fontSize={30}/>
    <Heading color="blue" text="Welcome!" fontSize={20} />
    
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />

    <ColorList colors={["red", "blue", "green", "yellow"]} />
    <ColorList colors={["#333", "#666", "#999", "#CCC"]} />
  </div>
  );
}

export default App
