import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <>
      <div>
        <Router>
          <Navbar />
           <Routes>
              <Route path="/" element={<News key="general" country="in" pageSize={this.pageSize} category="general" />} />
              <Route path="/business" element={<News key="business" country="in" pageSize={this.pageSize} category="business" />} />
              <Route path="/entertainment" element={<News key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" />} />
              <Route path="/general" element={<News key="general" country="in" pageSize={this.pageSize} category="general" />} />
              <Route path="/health" element={<News key="health" country="in" pageSize={this.pageSize} category="health" />} />
              <Route path="/science" element={<News key="science" country="in" pageSize={this.pageSize} category="science" />} />
              <Route path="/sports" element={<News key="sports" country="in" pageSize={this.pageSize} category="sports" />} />
              <Route path="/technology" element={<News key="technology" country="in" pageSize={this.pageSize} category="technology" />} />
           </Routes>
        </Router>
        </div>
      </>
    );
  }
}
