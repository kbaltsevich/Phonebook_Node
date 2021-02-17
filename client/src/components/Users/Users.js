import React from "react";
import "./users.css";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="centered highlight">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Мобильный номер</th>
            <th>Городской номер</th>
            <th>Управление</th>
          </tr>
        </thead>

        <tbody>
          {this.props.users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.phone}</td>
                <td>{user.job}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
