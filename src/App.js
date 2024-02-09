import './App.css';
import React, { useState } from 'react'
import NavBa from './components/NavBa';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 5;
  // const apiKey= 9a3e9fc3ea34431790914974c4f24949;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBa />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}    key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress}    key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress}    key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          {/* <Route path="/general" element={<News setProgress={setProgress}    key="general" pageSize={pageSize} country="in" category="general" />} /> */}
          <Route path="/health" element={<News setProgress={setProgress}    key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress}    key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress}    key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress}    key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
