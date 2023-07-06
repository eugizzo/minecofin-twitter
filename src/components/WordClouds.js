import React, { useState } from 'react';
import  WordCloud from 'react-wordcloud';
import { scaleLinear } from 'd3-scale';
 import LDAvisData from './wordcloudData';


const WordClouds = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const tinfoData = LDAvisData.tinfo;
  const chartData = tinfoData.Term.map((term, index) => ({
    text: term,
    value: tinfoData.Freq[index],
  }));

  const handleTopicSelect = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedTopic(selectedValue);
  };

  const filteredData = selectedTopic
    ? tinfoData.Term.filter((_, i) => i % 10 === selectedTopic - 1)
    : tinfoData.Term;

  const filteredChartData = chartData.filter((data) => filteredData.includes(data.text));

  // Calculate the minimum and maximum frequencies for scaling the word sizes
  const minFreq = Math.min(...tinfoData.Freq);
  const maxFreq = Math.max(...tinfoData.Freq);

  // Scale function for word sizes
  const scale = scaleLinear().domain([minFreq, maxFreq]).range([1, 600]);

  const wordCloudOptions = {
    rotations: 2,
    rotationAngles: [-90, 0],
    spiral: 'archimedean',
    scale: 'sqrt',
    padding: 3,
    fontWeight: 'bold',
    fontSizes: [12, 50], // Minimum and maximum font sizes
    fontFamily: 'Arial',
    transitionDuration: 500,
    enableTooltip: true,
    deterministic: true,
    color: () => {
      const colors = ['#ff0000', '#00ff00', '#0000ff','#078ECE']; // Add your own color scheme here
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getWordTooltip: (word) => `${word.text} (${word.value})`,
    spiralResolution: 5,
    scaleFontSize: true,
    fontWeightScale: scale,
  };

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
            <option value="1">Topic 1</option>
            <option value="2">Topic 2</option>
            <option value="3">Topic 3</option>
            <option value="4">Topic 4</option>
            <option value="5">Topic 5</option>
            <option value="6">Topic 6</option>
            <option value="7">Topic 7</option>
            <option value="8">Topic 8</option>
            <option value="9">Topic 9</option>
            <option value="10">Topic 10</option>
        
      </select>
    </div>
  </div>
  </label>
  </form>
  <h2 className='text-[#078ECE]'>Selected Topic: {selectedTopic?selectedTopic:'all'}</h2>
  </div>


      <WordCloud className="pt-12" words={filteredChartData} options={wordCloudOptions} />
    </div>
  );
};

export default WordClouds;
