import Row from "../Row/Row";
import React, { Component } from "react";
import axios from "axios";
import SortButton from "../SortButton/SortButton";

class Table extends Component {
  state = {
    employees: [],
    headers: [
      {
        text: "First Name",
        label: "firstName",
      },
      {
        text: "Last Name",
        label: "lastName",
      },
      {
        text: "Email Address",
        label: "emailAddress",
      },
      {
        text: "Phone Number",
        label: "phoneNumber",
      },
      {
        text: "Birth Date",
        label: "DOB",
      },
    ],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=40")
      .then((res) => {
        const employeeArray = [];
        res.data.results.map((employee) => {
          return employeeArray.push({
            firstName: employee.name.first,
            lastName: employee.name.last,
            image: employee.picture.thumbnail,
            emailAddress: employee.email,
            phoneNumber: employee.phone,
            DOB: employee.dob.date,
          });
        });
        this.setState({
          employees: employeeArray,
        });
      })
      .catch((err) => console.log(err));
  }
  handleSort = (category) => {
    this.setState({
      employees: this.state.employees.sort(this.sortFunction(category)),
    });
  };

  sortFunction = (category) => 
    (a, b) => 
      a[category] === b[category] ? 0 : a[category] < b[category] ? -1 : 1;
    ;
  ;

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            {this.state.headers.map((header, index) => (
              <SortButton
                key={index}
                text={header.text}
                label={header.label}
                handleSort={this.handleSort}
              />
            ))}
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
