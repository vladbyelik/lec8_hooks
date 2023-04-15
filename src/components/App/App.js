import { useEffect, useState } from 'react';
import EffectExample from '../EffectExample/EffectExample';
import StateExample from '../StateExample/StateExample';
import './App.css';
import MemoExample from '../MemoExample/MemoExample';
import CallbackExample from '../CallbackExample/CallbackExample';

function App() {

  // const [hide, setHide] = useState(true);

  return (
    <div className="App">
      <h1>Hooks</h1>
      {/* <button onClick={() => {
        setHide(!hide);
      }}>Hide / Show</button> */}
      {/* <StateExample /> */}
      {/* {hide && <EffectExample />} */}
      {/* <MemoExample /> */}
      <CallbackExample />
    </div>
  );
}

export default App;
