import React from "react";
const axios = require('axios');

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.getUsers(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getUsers() {
    axios.get("http://localhost:5000/api/users")
      .then((response) => {
          this.setState({ users: response.data })
        })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <ul>
        {this.state.users.map((item) => 
          <li key={item._id}> {item.name}, {item.mobile}, {item.phone}, {item.job} </li>
        )}
      </ul>
    );
  }
}
