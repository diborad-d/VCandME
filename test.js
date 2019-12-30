import React from "react";
import HomeBtn from "../components/HomeBtn";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { expression } from "@babel/template";

class ClosetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <h1>ClosetPage</h1>
          <main>
            <h1>Welcome</h1>
          </main>
        </div>
      </Router>
    );
  }
}

export default ClosetPage;
