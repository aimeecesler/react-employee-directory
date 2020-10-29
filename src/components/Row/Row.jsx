import moment from "moment";
const Row = (props) => {
  return (
    <tr>
      <td>
        <img
          src={props.employee.image}
          alt={`${props.employee.firstName} ${props.employee.lastName}`}
        />
      </td>
      <td>{props.employee.firstName}</td>
      <td>{props.employee.lastName}</td>
      <td>{props.employee.emailAddress}</td>
      <td>{props.employee.phoneNumber}</td>
      <td>{moment(props.employee.DOB).format("L")}</td>
    </tr>
  );
};

export default Row;
