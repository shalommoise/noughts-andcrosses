import React from "react";

class Table extends React.Component {
  state = {
    tableState: [null, null, null, null, null, null, null, null, null],
  };

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const id = changeEvent.target.id;

    if (value !== "x" && value !== "o") {
      const warning = document.createElement("p");
      warning.innerText = "Not Allowed";
      document.getElementById("form").appendChild(warning);
    } else
      this.setState((currentState) => {
        currentState.tableState[id] = value;
      });
  };

  render = () => {
    return (
      <form id="form" /*onSubmit={this.handleSubmit}*/>
        <input type="text" id="0" onChange={this.handleChange} />
        <input type="text" id="1" onChange={this.handleChange} />
        <input type="text" id="2" onChange={this.handleChange} />
        <br />
        <input type="text" id="3" onChange={this.handleChange} />
        <input type="text" id="4" onChange={this.handleChange} />
        <input type="text" id="5" onChange={this.handleChange} />
        <br />
        <input type="text" id="6" onChange={this.handleChange} />
        <input type="text" id="7" onChange={this.handleChange} />
        <input type="text" id="8" onChange={this.handleChange} />
        <br />
      </form>
    );
  };
}

export default Table;
