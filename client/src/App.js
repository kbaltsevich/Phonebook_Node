import "./App.css";
import "materialize-css";
import React from "react";
import Title from "./components/title";
import Clock from "./components/Clock";
import Users from "./components/Users/Users";
import Nav from "./components/nav/Nav";

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getUsers(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getUsers() {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.getUsers()}
        <Nav title="Организация" />
        <main className="container">
          <Title title="Справочник" />
          <Clock />
          <Users className="container" users={this.state.users} />
        </main>
      </div>
    );
  }
}

export default App;
