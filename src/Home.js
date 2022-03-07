import React, { Component } from "react";
import Header from "./Pages/Header";
import Content from "./Pages/Content";
import Footer from "./Pages/Footer";
import "./index.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homeContainer">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
