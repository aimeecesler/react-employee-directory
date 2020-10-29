import Row from "../Row/Row";
import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  state = {
    employees: [
    //   {
    //     firstName: "Bill",
    //     lastName: "Murray",
    //     image: "http://www.fillmurray.com/50/75",
    //     emailAddress: "bill@laughs.com",
    //     phoneNumber: "123-867-5309",
    //     DOB: "09/21/1950",
    //   },
    //   {
    //     firstName: "William",
    //     lastName: "Murray",
    //     image: "http://www.fillmurray.com/50/75",
    //     emailAddress: "william@laughs.com",
    //     phoneNumber: "123-867-5309",
    //     DOB: "09/21/1950",
    //   },
    ],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=40")
      .then((res) => {
          console.log(res.data.results)
        this.setState({
            employees: res.data.results
        });
      })
      .catch((err) => console.log(err));
  }

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
