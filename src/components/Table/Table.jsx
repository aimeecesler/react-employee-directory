import React, { Component } from "react";
import Row from "../Row/Row"

class Table extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        <Row />
        </tbody>
      </table>
    );
  }
}

export default Table;
