import React, { Component } from "react";
import Table from "./Table";

export default class Artical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div className={`clicks-${count}`}>{count} clicks</div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <h1>Artical details</h1>
        <Table />
      </div>
    );
  }
}
