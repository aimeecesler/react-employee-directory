import Row from "../Row/Row";
import React, { Component } from "react";

class Table extends Component {
  state = {
    employees: [
      {
        firstName: "Bill",
        lastName: "Murray",
        image: "http://www.fillmurray.com/50/75",
        emailAddress: "bill@laughs.com",
        phoneNumber: "123-867-5309",
        DOB: "09/21/1950",
      },
      {
        firstName: "William",
        lastName: "Murray",
        image: "http://www.fillmurray.com/50/75",
        emailAddress: "william@laughs.com",
        phoneNumber: "123-867-5309",
        DOB: "09/21/1950",
      },
    ],
  };

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
          {this.state.employees.map((employee) => (
            <Row employee={employee} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
