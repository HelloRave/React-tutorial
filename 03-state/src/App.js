import {NumberBox, AlertBox, TickleBox} from './numberbox.js'

function App() {
  return (
    <div>
        <NumberBox intialValue={10}/>
        <NumberBox intialValue={0}/>
        <AlertBox message='HELLO'/>
        <AlertBox message='BYE'/>
        <TickleBox />
    </div>
  );
}

export default App;
