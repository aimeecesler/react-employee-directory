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
        this.setState({
          employees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleSort = (category) => {
    console.log(`${category} sort button clicked`);
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <button
                className="btn font-weight-bold"
                onClick={() => this.handleSort("firstName")}
              >
                First Name <i className="fas fa-sort"></i>
              </button>
            </th>
            <th scope="col">
              <button
                className="btn font-weight-bold"
                onClick={() => this.handleSort("lastName")}
              >
                Last Name <i className="fas fa-sort"></i>
              </button>
            </th>
            <th scope="col">
              <button
                className="btn font-weight-bold"
                onClick={() => this.handleSort("emailAddress")}
              >
                Email Address <i className="fas fa-sort"></i>
              </button>
            </th>
            <th scope="col">
              <button
                className="btn font-weight-bold"
                onClick={() => this.handleSort("phoneNumber")}
              >
                Phone Number <i className="fas fa-sort"></i>
              </button>
            </th>
            <th scope="col">
              <button
                className="btn font-weight-bold"
                onClick={() => this.handleSort("DOB")}
              >
                Birth Date <i className="fas fa-sort"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee, index) => (
            <Row employee={employee} key={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
