import React from "react";

class Table extends React.Component {
  state = {
    tableState: [null, null, null, null, null, null, null, null, null],
    turn: true,
  };

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const id = changeEvent.target.id;
    if (
      document.getElementById("form").childNodes["14"] &&
      document.getElementById("form").childNodes["14"].innerText ===
        "Not Allowed"
    ) {
      document.getElementById("form").childNodes["14"].remove();
    }
    if (value !== "x" && value !== "o" && value !== "") {
      const warning = document.createElement("p");
      warning.innerText = "Not Allowed";
      document.getElementById("form").appendChild(warning);
    } else
      this.setState((currentState) => {
        currentState.tableState[id] = value;
      });
  };

  fixChange = (clickEvent) => {
    for (let i = 0; i < 9; i++) {
      if (
        this.state.tableState[i] === "x" ||
        this.state.tableState[i] === "o"
      ) {
        document.getElementById(i).readOnly = true;
      }
    }
    this.setState((currentState) => {
      currentState.turn = !currentState.turn;
      return currentState;
    });

    clickEvent.preventDefault();
  };
  changeTurn = (clickEvent) => {
    // this.setState((currentState) => {
    //   console.log(currentState.turn);
    //   currentState.turn = !currentState.turn;
    // });
    clickEvent.preventDefault();
  };

  render = () => {
    return (
      <form id="form" /*onSubmit={this.handleSubmit}*/>
        <br />
        <input type="text" id="0" maxLength="1" onChange={this.handleChange} />
        <input type="text" id="1" maxLength="1" onChange={this.handleChange} />
        <input type="text" id="2" maxLength="1" onChange={this.handleChange} />
        <br />
        <input type="text" id="3" maxLength="1" onChange={this.handleChange} />
        <input type="text" id="4" maxLength="1" onChange={this.handleChange} />
        <input type="text" id="5" maxLength="1" onChange={this.handleChange} />
        <br />
        <input type="text" id="6" maxLength="1" onChange={this.handleChange} />
        <input type="text" id="7" maxLength="1" onChange={this.handleChange} />
        <input type="text" id="8" maxLength="1" onChange={this.handleChange} />
        <br />
        <button onClick={this.fixChange}>{this.state.turn ? "x" : "o"}</button>
      </form>
    );
  };
}

export default Table;
