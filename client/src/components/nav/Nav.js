import React from "react";
import Title from "../title";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <nav>
        <div className="nav-wrapper green darken-2">
          <a href="#" className="brand-logo">{this.props.title}</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
      )
  }
}
