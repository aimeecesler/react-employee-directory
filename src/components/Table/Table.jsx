import Row from "../Row/Row"
import React, { Component } from 'react';

class Table extends Component {
// state = {
//     employees: []
// }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Birth Date</th>
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
