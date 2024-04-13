import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News  from "./components/News";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize=5;

  state={progress: 0}

  setprogress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
        <Router>
          <Navbar />  
          <LoadingBar
           color='#f11946'
           progress={this.state.progress}
          />

           <Routes>
              <Route path="/" element={<News setprogress={this.setprogress} key="general" country="in" pageSize={this.pageSize} category="general" />} />
              <Route path="/business" element={<News setprogress={this.setprogress} key="business" country="in" pageSize={this.pageSize} category="business" />} />
              <Route path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" />} />
              <Route path="/general" element={<News setprogress={this.setprogress} key="general" country="in" pageSize={this.pageSize} category="general" />} />
              <Route path="/health" element={<News setprogress={this.setprogress} key="health" country="in" pageSize={this.pageSize} category="health" />} />
              <Route path="/science" element={<News setprogress={this.setprogress} key="science" country="in" pageSize={this.pageSize} category="science" />} />
              <Route path="/sports" element={<News setprogress={this.setprogress} key="sports" country="in" pageSize={this.pageSize} category="sports" />} />
              <Route path="/technology" element={<News setprogress={this.setprogress} key="technology" country="in" pageSize={this.pageSize} category="technology" />} />
           </Routes>
        </Router>
        </div>
      </>
    );
  }
}
