import { useState, useContext, createContext, useEffect } from "react";
import Header from "./Header";
import C1 from './C1.js';

const AppState = createContext();

function App() {
  const [data, setData] = useState('Prop Drilling.')
  const [data2, setData2] = useState('Using Context API.')
/*
 Context API  helps use deal with the problem of prop drilling.
 Prop drilling is when we have pass down a specific data to a multuple nested component.
 Context api lets use export the data and import it to the component we need it in.
 It reduces the chances of errors.
*/
  return (
    <>
      <AppState.Provider value={data2}>
      <div className="App">
      <Header/>
      <C1 data={data} />
    </div>
      </AppState.Provider>
      
    </>
    
  );
}

export default App;
export {AppState};
