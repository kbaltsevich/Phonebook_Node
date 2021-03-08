import "./App.css";
import "materialize-css";
import React from "react";
import Title from "./components/title";
import Clock from "./components/Clock";
import Users from "./components/Users/Users";
import Nav from "./components/nav/Nav";
import Form from "./components/Form";

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    // this.timerID = setInterval(() => this.getUsers(), 60000);
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  createUser(user) {
    axios.post("http://192.168.43.125:5000/api/users", user)
      .then(res => {console.log(user); return this.getUsers()})
      .catch(err=>console.log(err))
  }

  getUsers() {
    axios
      .get("http://192.168.43.125:5000/api/users")
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
          <Form createUser={this.createUser}/>
          <Users className="container" users={this.state.users} />
        </main>
      </div>
    );
  }
}

export default App;
