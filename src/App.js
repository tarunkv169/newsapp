import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News  from "./components/News";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function App(){
  
  let pageSize=5;
  
  const apikey=process.env.REACT_APP_NEWS_API;

  // const state={progress: 0}      // 2. var progress is used anywhere to assign value

  const [progress,setProgress]=useState(0);
  const setprogress=(progress)=>{
    setProgress(progress)  // 3. we create func to manipulate var progress value
  }                                      // 4. passed this func in Route to News.js  where it is used to manipulate value by passing arguments


  
    return (
      <>
      <div>
        <Router>
          <Navbar />  
          <LoadingBar
           color='#f11946'
           progress={progress}  // 1. we set value of progress using state which defined its value with variable
          />                             
                                              
           <Routes>                               
              <Route path="/" element={<News setprogress={setprogress} apikey={apikey} key="general" country="in" pageSize={pageSize} category="general" />} />
              <Route path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" country="in" pageSize={pageSize} category="business" />} />
              <Route path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" country="in" pageSize={pageSize} category="entertainment" />} />
              <Route path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general" country="in" pageSize={pageSize} category="general" />} />
              <Route path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" country="in" pageSize={pageSize} category="health" />} />
              <Route path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" country="in" pageSize={pageSize} category="science" />} />
              <Route path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" country="in" pageSize={pageSize} category="sports" />} />
              <Route path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" country="in" pageSize={pageSize} category="technology" />} />
           </Routes>
        </Router>
        </div>
      </>
    );
  
}
