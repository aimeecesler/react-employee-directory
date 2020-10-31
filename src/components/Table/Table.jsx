import Row from "../Row/Row";
import React from "react";
import SortButton from "../SortButton/SortButton";

// renders the skeleton of the table along with the headers and rows via other components
const Table = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          {props.data.headers.map((header, index) => (
            <SortButton
              key={index}
              data={header}
              id={index}
              handleSort={props.handleSort}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.employees.map((employee, index) => (
          <Row employee={employee} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
