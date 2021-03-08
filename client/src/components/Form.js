import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      phone: "",
      job: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeMobile = this.changeMobile.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeJob = this.changeJob.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }
  changeMobile(e) {
    this.setState({ mobile: e.target.value });
  }
  changePhone(e) {
    this.setState({ phone: e.target.value });
  }
  changeJob(e) {
    this.setState({ job: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          id="name"
          type="text"
          defaultValue={this.state.name}
          placeholder="Имя"
          onChange={this.changeName}
        ></input>
        <input
          id="mobile"
          type="text"
          defaultValue={this.state.mobile}
          placeholder="Мобильный номер"
          onChange={this.changeMobile}
        ></input>
        <input
          id="phone"
          type="text"
          defaultValue={this.state.phone}
          placeholder="Городской номер"
          onChange={this.changePhone}
        ></input>
        <input
          id="job"
          type="text"
          defaultValue={this.state.job}
          placeholder="Управление"
          onChange={this.changeJob}
        ></input>
        <button
          onClick={() => {
            this.props.createUser(this.state);
            this.setState({
              name: "",
              mobile: "",
              phone: "",
              job: "",
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
