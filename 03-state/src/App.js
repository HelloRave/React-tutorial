import {NumberBox, AlertBox, TickleBox, Dice} from './numberbox.js'

function App() {
  return (
    <div>
        <NumberBox intialValue={10}/>
        <NumberBox intialValue={0}/>
        <AlertBox message='HELLO'/>
        <AlertBox message='BYE'/>
        <TickleBox />
        <Dice />
    </div>
  );
}

export default App;
