import moment from "moment";
const Row = (props) => {
  return (
    <tr>
      <td>
        <img
          src={props.employee.picture.thumbnail}
          alt={`${props.employee.name.first} ${props.employee.name.last}`}
        />
      </td>
      <td>{props.employee.name.first}</td>
      <td>{props.employee.name.last}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.phone}</td>
      <td>{moment(props.employee.dob.date).format("L")}</td>
    </tr>
  );
};

export default Row;
