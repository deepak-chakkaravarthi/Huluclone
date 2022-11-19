import React, { useState } from 'react';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/navbar';
import './App.css';
import request from './helpers/request';
import Result from './component/Results/Result';

const App = () => {
  const [selectedOption,setselectedOption] = useState(request.fetchTrending);
  console.log(selectedOption);
  return (
    <div className='app'>
      
      <Header/>
      <Navbar setselectedOption={setselectedOption} />
      <Result selectedOption={selectedOption}/>
    </div>
  );
};

export default App
