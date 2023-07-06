import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LineChartData from "./components/LineChartData";
import Line from "./components/wordcloudData";
import Trending_topic from "./components/Trending_topic";
import Trending_wordCloud from "./components/Trending_wordCloud";
import Minecofin from "./components/layout/Minecofin";
const App = () => (
    <Router>
 
      <Routes>
      <Route path="/" element={<Minecofin/>} />
        <Route path="/trending_topic" element={<Trending_topic/>} />
        <Route path="/trnding_analysis" element={<Trending_wordCloud/>} />
        
      </Routes>
    </Router>
  
);

export default App;
