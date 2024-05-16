import './App.css'
import Greeter from './Greeter';
import Die from './Die';

function App() {
  return (
  <div>
    {/* <Greeter person="Bill" from="Colt" />
    <Greeter person="Ted" from="Colt" />
    <Greeter person="Rosa" from="Elton" /> */}
    <Die numSides={20} />
    <Die />
    <Die />
  </div>
  );
}

export default App
