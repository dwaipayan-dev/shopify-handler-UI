import * as React from "react";
import { Component } from "react";

interface RowProps {
  recipient: string;
  onDate: string;
  recoverUrl: string;
  items: Array<string>;
}

interface RowState {}

class Row extends React.Component<RowProps, RowState> {
  constructor(props: RowProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "Black",
          paddingTop: 5,
          paddingBottom: 5,
          marginTop: 5,
          marginBottom: 5,
          borderColor: "white",
        }}
      >
        <div>{this.props.recipient}</div>
        <div>{this.props.onDate}</div>
        <div>{this.props.items.toString()}</div>
        <div>{this.props.recoverUrl}</div>
      </div>
    );
  }
}

export default Row;
