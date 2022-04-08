import React from "react";

import "./home.css";

class APImsg extends React.Component {
  state = {
    msg: "loading...",
  };

  async componentDidMount() {
    // see whether the api add is shown on page source or not
    const url = "https://ip-fast.com/api/ip/";
    const response = await fetch(url);
    const data = await response.text();
    this.setState({ msg: data });
  }

  render() {
    return <p>Hello, {this.state.msg}</p>;
  }
}

class LocalAPImsg extends React.Component {
  state = {
    msg: "loading...",
  };

  async componentDidMount() {
    // check can you use multiple componentDidMount() or not
    const url = "/api";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ msg: data.msg });
  }

  render() {
    return <p>Local API message: {this.state.msg}</p>;
  }
}

export default function Home() {
  function Welcome(booVoda) {
    // console.log(booVoda);
    return <p>Hello, {booVoda.name}</p>;
  }

  function Header(props) {
    return <div className="header"></div>;
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h3>Home</h3>
      <hr></hr>
      {/* <Welcome name="user!" /> */}
      <APImsg />
      <LocalAPImsg />
      <hr></hr>
    </main>
  );
}
