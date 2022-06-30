import React from "react";
import "./styles.css";
class Password extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkChar = this.checkChar.bind(this);
    this.checkLower = this.checkLower.bind(this);
    this.checkUpper = this.checkUpper.bind(this);
    this.finalCheck = this.finalCheck.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  checkChar() {
    return this.state.text.length >= 6;
  }

  checkLower() {
    let reg = /[a-z]/;
    return reg.test(this.state.text);
  }

  checkUpper() {
    let reg = /[A-Z]/;
    return reg.test(this.state.text);
  }

  finalCheck() {
    return this.checkUpper() && this.checkLower() && this.checkChar();
  }

  render() {
    return (
      <div className="app">
        <input
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <div className="rules">
          <ul>
            <li className={this.checkLower() ? "passed" : "missing"}>
              1 lowercase character
            </li>
            <li className={this.checkUpper() ? "passed" : "missing"}>
              1 uppercase character
            </li>

            <li className={this.checkChar() ? "passed" : "missing"}>
              6 minimum characters
            </li>
          </ul>
        </div>
        <button disabled={this.finalCheck() ? false : true}> Submit </button>
        <footer>
          Made by{" "}
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Sasha Tran
          </a>
        </footer>
      </div>
    );
  }
}

export default Password;
