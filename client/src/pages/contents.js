import React from "react";
import "./contents.css";
import { Link } from "react-router-dom";

class AllContents extends React.Component {
  state = {
    data: [{ title: "", author: "", date: "", content: "" }],
  };

  async componentDidMount() {
    const response = await fetch("/api/contents");
    // console.log(await response.json());
    const data = await response.json();
    this.setState({ data: data });
    // this.setState({ data: JSON.stringify(data) });
  }

  render() {
    return (
      <div>
        <table className="table contents">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((el, idx) => (
              <tr key={idx}>
                <td>
                  <Link to={"" + idx}>{el.title} </Link>
                </td>
                <td>{el.author}</td>
                <td>{el.date}</td>
                <td>{el.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default function Contents() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Contents</h2>
      <AllContents />
    </main>
  );
}
