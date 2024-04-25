import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News  from "./components/News";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import Newsitems from "./components/Newsitems";


export default function App(){
  
  let pageSize=5;
  
  const apikey=process.env.REACT_APP_NEWS_API;

  // const state={progress: 0}      // 2. var progress is used anywhere to assign value

  const [progress,setProgress]=useState(0);
  // const setProgress=(progress)=>{
  //   setProgress(progress)  // 3. we create func to manipulate var progress value
  // }                                      // 4. passed this func in Route to News.js  where it is used to manipulate value by passing arguments

  
  const [mode,setMode] = useState('light');
  
  const togglemode=()=>{
    if(mode==='dark')
    {                                               // always remmeber while func call onclick={---},style={mystyle} etc 
      setMode('light'); 
      document.body.style.backgroundColor='white'; 
      // showalert(" Dark mode disabled","success");                            // for setmode('---')
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='black';                               // for setmode('---')
      // showalert(" Dark mode enabled","success");                            // for setmode('---')
    }
   }

  
    return (
      <>
      <div>
        <Router>
          <Navbar  mode={mode} togglemode={togglemode}/> 
          <LoadingBar
           color='#f11946'
           progress={progress}  // 1. we set value of progress using state which defined its value with variable
          />                             
                                              
           <Routes>                               
              <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" country="in" pageSize={pageSize} category="general" mode={mode} togglemode={togglemode}/>}   />
              <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" country="in" pageSize={pageSize} category="business"   mode={mode} togglemode={togglemode}/>} />
              <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" country="in" pageSize={pageSize} category="entertainment"  mode={mode} togglemode={togglemode} />} />
              <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" country="in" pageSize={pageSize} category="general"   mode={mode} togglemode={togglemode}/>} />
              <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" country="in" pageSize={pageSize} category="health"   mode={mode} togglemode={togglemode}/>} />
              <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" country="in" pageSize={pageSize} category="science"   mode={mode} togglemode={togglemode}/>} />
              <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" country="in" pageSize={pageSize} category="sports"   mode={mode} togglemode={togglemode}/>} />
              <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" country="in" pageSize={pageSize} category="technology"   mode={mode} togglemode={togglemode}/>} />
           </Routes>
        </Router>
        </div>
      </>
    );
  
}
