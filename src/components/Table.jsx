import React from "react";

class Table extends React.Component {
  state = {
    tableState: [null, null, null, null, null, null, null, null, null],
  };

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const id = changeEvent.target.id;
    if(document.getElementById('form').childNodes['12']){
      document.getElementById('form').childNodes['12'].remove()
    }
    if (value !== "x" && value !== "o" && value !== '') {
      const warning = document.createElement("p");
      warning.innerText = "Not Allowed";
      document.getElementById("form").appendChild(warning)
    } else
      this.setState((currentState) => {
        currentState.tableState[id] = value;
      });
  };

  fixChange = (changeEvent) => {
    changeEvent.target.value = changeEvent.target.value.bind(this)
    
  }

  render = () => {
    return (
      <form id="form" /*onSubmit={this.handleSubmit}*/>
        <input type="text" id="0" maxLength='1' onChange={this.handleChange && this.fixChange} />
        <input type="text" id="1" maxLength='1' onChange={this.handleChange} />
        <input type="text" id="2" maxLength='1' onChange={this.handleChange} />
        <br />
        <input type="text" id="3" maxLength='1' onChange={this.handleChange} />
        <input type="text" id="4" maxLength='1' onChange={this.handleChange} />
        <input type="text" id="5" maxLength='1' onChange={this.handleChange} />
        <br />
        <input type="text" id="6" maxLength='1' onChange={this.handleChange} />
        <input type="text" id="7" maxLength='1' onChange={this.handleChange} />
        <input type="text" id="8" maxLength='1' onChange={this.handleChange} />
        <br />
      </form>
    );
  };
}

export default Table;
