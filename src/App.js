import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News  from "./components/News";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize=5;
  
  apikey=process.env.REACT_APP_NEWS_API;

  state={progress: 0}      // 2. var progress is used anywhere to assign value

  setprogress=(progress)=>{
    this.setState({progress: progress})  // 3. we create func to manipulate var progress value
  }                                      // 4. passed this func in Route to News.js  where it is used to manipulate value by passing arguments
  render() {
    return (
      <>
      <div>
        <Router>
          <Navbar />  
          <LoadingBar
           color='#f11946'
           progress={this.state.progress}  // 1. we set value of progress using state which defined its value with variable
          />                             
                                              
           <Routes>                               
              <Route path="/" element={<News setprogress={this.setprogress} apikey={this.apikey} key="general" country="in" pageSize={this.pageSize} category="general" />} />
              <Route path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} key="business" country="in" pageSize={this.pageSize} category="business" />} />
              <Route path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" />} />
              <Route path="/general" element={<News setprogress={this.setprogress} apikey={this.apikey} key="general" country="in" pageSize={this.pageSize} category="general" />} />
              <Route path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key="health" country="in" pageSize={this.pageSize} category="health" />} />
              <Route path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key="science" country="in" pageSize={this.pageSize} category="science" />} />
              <Route path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key="sports" country="in" pageSize={this.pageSize} category="sports" />} />
              <Route path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key="technology" country="in" pageSize={this.pageSize} category="technology" />} />
           </Routes>
        </Router>
        </div>
      </>
    );
  }
}
