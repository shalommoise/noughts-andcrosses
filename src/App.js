import React from "react";
import Title from "./components/Title";
import Table from "./components/Table";
import "./App.css";

class App extends React.Component {
  
  render = () => {
    return (
      <div className="App">
        <Title />
        <Table />
      </div>
    );
  };
  // xoButton = (clickEvent) => {
  //   this.setState((currentState) => {
  //     console.dir(clickEvent);
  //   });
  // };
}

export default App;
