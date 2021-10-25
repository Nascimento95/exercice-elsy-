import React from "react";
import './App.css';
import Box from './components/box.js';
import './styles/global.css';
const tempMin= -20
const tempMax= 40
const heartMin= 80
const heartmax= 180
const steapsMin= 0
const steapsMax= 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box icon= "local_drink" color = "#3A85FF" value={1.5} unit="L"  />
          {/* steps */}
          <Box icon= "directions_walk" color = "black" value={3000} unit="steps"/>
          {/* heart */}
          <Box  icon= "favorite" color = "red" value={120} unit="bpm"/>
          {/* temperature */}
          <Box  icon= "dwb_sunny" color = "yellow" value={-10} unit="°C"/>
          <p>Heart:{heartMin} </p>
          <p>Temperature : {tempMin} </p>
          <p>steps : {steapsMin} </p> 
        </div>
      </div>
    );
  }
}

export default App;