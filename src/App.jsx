import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';

function App() {
  return (
  <div>
    {/* <Greeter person="Bill" from="Colt" />
    <Greeter person="Ted" from="Colt" />
    <Greeter from="Elton" />
    <Die numSides={20} />
    <Die />
    <Die numSides={10} /> */}
    <ListPicker values={['first', 'second', 'third']} />
  </div>
  );
}

export default App
