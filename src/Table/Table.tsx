import axios from "axios";
import * as React from "react";
import { Component } from "react";
import Row from "../Row/Row";

interface Props {}

interface Data {
  recipient: string;
  onDate: string;
  recoverUrl: string;
  items: Array<string>;
}

interface State {
  dataList: Array<Data>;
}

class Table extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }

  fetch() {
    axios
      .get("[Ip address of server]/abandoned/allmessages")
      .then((response) => {
        let arr: Array<Data> = response.data;
        this.setState({ dataList: arr });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidMount(): void {
    this.fetch();
    setInterval(() => {
      this.fetch();
    }, 5000);
  }

  render() {
    const loop = this.state.dataList.map((data: Data) => {
      return (
        <Row
          recipient={data.recipient}
          onDate={new Date(Date.parse(data.onDate)).toLocaleTimeString()}
          items={data.items}
          recoverUrl={data.recoverUrl}
        />
      );
    });
    return <>{loop}</>;
  }
}

export default Table;
