import React, { useState } from 'react';
import BarChart from './BarChart'
import './App.css';

function App() {
const [data, setData] = useState([25, 40, 150, 75, 40, 55, 89])

  return (
   <React.Fragment>
     <BarChart data={data}/>
     <br />
     <button onClick={() => setData(data.map(value => value + 5 ))}>Update data</button>
    <button onClick={() => setData(data.filter(value => value < 35 ))}>filter data</button>
    <button onClick={() => setData([...data, Math.round(Math.random() * 400)])}>add data</button>
   </React.Fragment>
  );
}

export default App;
