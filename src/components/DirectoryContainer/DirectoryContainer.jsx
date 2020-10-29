import React, { Component } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import axios from "axios";
import "./style.css";

class DirectoryContainer extends Component {
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

  handleSearch = (searchInput) => {
    console.log(searchInput);
  };

  handleSort = (category) => {
    this.setState({
      employees: this.state.employees.sort(this.sortFunction(category)),
    });
  };

  sortFunction = (category) => (a, b) =>
    a[category] === b[category] ? 0 : a[category] < b[category] ? -1 : 1;

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row main-header mb-5">
            <div className="col-sm-12 text-center my-5">
              <h1>Employee Directory</h1>
              <h3>
                Click on carrots to filter by heading or use the search box to
                narrow your results.
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-center">
              <Search handleSearch={this.handleSearch}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <Table data={this.state} handleSort={this.handleSort}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DirectoryContainer;
