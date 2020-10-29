import Row from "../Row/Row";
import React, { Component } from "react";
import axios from "axios";
import SortButton from "../SortButton/SortButton"

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
            {this.state.headers.map((header, index) => (
                <SortButton key={index} text={header.text} label={header.label} handleSort={this.handleSort}/>
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
