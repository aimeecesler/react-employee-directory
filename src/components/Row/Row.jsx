import moment from "moment";
import "./rowStyle.css"
const Row = (props) => {
  return (
    <tr>
      <td>
        <img
          className="profile-image"
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
