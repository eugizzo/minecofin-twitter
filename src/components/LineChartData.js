import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Tab.css'
import LDAvisDataList from './data';


const LineChartData = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const tinfoData = LDAvisDataList[0].tinfo;
  const mdsDatData = LDAvisDataList[0].mdsDat;

  const handleTopicSelect = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedTopic(selectedValue);
  };

  const allTerms = tinfoData.Term;
  const topics = mdsDatData.topics;

  let startIndex = 0;
  let endIndex = 100;

  if (selectedTopic) {
    const selectedTopicIndex = selectedTopic - 1;
    startIndex = selectedTopicIndex * 40;
    endIndex = startIndex + 40;
  }

  const filteredData = allTerms.slice(startIndex, endIndex);

  const chartData = filteredData.map((term, index) => ({
    Term: term,
    Freq: tinfoData.Freq[startIndex + index],
    Total: tinfoData.Total[startIndex + index],
  }));
  const termFontSize = selectedTopic ? 12 : 10;
  return (
    <div>
      
<div className='pl-2'>
      <form>
      <label>
       <h3 > Select a topic:</h3>
      <div class="flex justify-center">
      <div class="mb-3 xl:w-96">
      
        <select onChange={handleTopicSelect} class="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
          <option value="">All</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>
              Topic {topic}
            </option>
          ))}
        </select>
      </div>
    </div>
    </label>
    </form>
    <h2 className='text-[#078ECE]'>Selected Topic: {selectedTopic?selectedTopic:'all'}</h2>
    </div>

      <BarChart width={1000} height={400} data={chartData} style={{paddingTop:20, marginBottom:40}}>
      
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis dataKey="Term" angle={-45} textAnchor="end" interval={0}  
        tick={{ fontSize: termFontSize }} />
        <YAxis dataKey="Freq" />
       <Tooltip/>
        <Legend wrapperStyle={{ width: '0px'  }} className="hidden-legend"
        />
        <Bar dataKey="Freq" fill="#078ECE"/>
      </BarChart>
    </div>
  );
};

export default LineChartData;
