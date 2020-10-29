import Row from "../Row/Row";
import React from "react";
import SortButton from "../SortButton/SortButton";

const Table = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          {props.data.headers.map((header, index) => (
            <SortButton
              key={index}
              text={header.text}
              label={header.label}
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
