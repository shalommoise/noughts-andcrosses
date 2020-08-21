import React from "react";

class Table extends React.Component {
  state = {
    tableState: ["", "", "", "", "", "", "", "", ""],
    turn: true,
    inputError: false,
    count: 0,
    winner: "",
  };

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const id = changeEvent.target.id;

    if (value !== "x" && value !== "o" && value !== "") {
      this.setState((currentState) => {
        const changeError = !currentState.inputError;
        return { ...currentState, inputError: changeError };
      });
    } else
      this.setState((currentState) => {
        const newTableState = [...currentState.tableState];
        const changeError = false;
        newTableState[id] = value;
        return {
          ...currentState,
          tableState: newTableState,
          inputError: changeError,
        };
      });
  };

  fixChange = (clickEvent) => {
    const table = this.state.tableState;

    for (let i = 0; i < 9; i++) {
      if (table[i] === "x" || table[i] === "o") {
        document.getElementById(i).readOnly = true;
        this.setState((currentState) => {
          const newTurn = !currentState.turn;
          const newCount = currentState.count + 1;
          return { ...currentState, turn: newTurn, count: newCount };
        });
      }
    }
    if (
      (table[0] === table[1] && table[2]) ||
      (table[0] === table[3] && table[6]) ||
      (table[0] === table[4] && table[8])
    ) {
      this.setState((currentState) => {
        const newWinner = table[0];
        return { ...currentState, winner: newWinner };
      });
    }
    if (
      (table[7] === table[4] && table[1]) ||
      (table[7] === table[6] && table[8])
    ) {
      this.setState((currentState) => {
        const newWinner = table[7];
        return { ...currentState, winner: newWinner };
      });
    }
    if (
      (table[2] === table[5] && table[8]) ||
      (table[2] === table[6] && table[4])
    ) {
      this.setState((currentState) => {
        const newWinner = table[2];
        return { ...currentState, winner: newWinner };
      });
    }

    clickEvent.preventDefault();
  };

  render = () => {
    return (
      <form id="form">
        <br />
        <input
          type="text"
          value={this.state.tableState[0]}
          id="0"
          maxLength="1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.tableState[1]}
          id="1"
          maxLength="1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.tableState[2]}
          id="2"
          maxLength="1"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.tableState[3]}
          id="3"
          maxLength="1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.tableState[4]}
          id="4"
          maxLength="1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.tableState[5]}
          id="5"
          maxLength="1"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.tableState[6]}
          id="6"
          maxLength="1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.tableState[7]}
          id="7"
          maxLength="1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.tableState[8]}
          id="8"
          maxLength="1"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button className="button" onClick={this.fixChange}>
          {this.state.count % 2 === 0 ? "x" : "o"}
        </button>
        {this.state.inputError && <h2>Error, Can only press 'x' or 'o'</h2>}
        {this.state.count === 9 && <h2>Game Over</h2>}
        {this.state.winner !== "" && (
          <h2>{this.state.winner} is the winner!</h2>
        )}
      </form>
    );
  };
}

export default Table;
