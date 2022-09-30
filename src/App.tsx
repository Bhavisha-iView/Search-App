import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchPage from './components/SearchImages/SearchPage';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css'
import { Route, Routes } from 'react-router-dom';
import DisplayData from './components/SearchImages/DisplayData';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import { useAppSelector } from './redux/hook';
import News from './components/NewsPage/News';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
  
function App() {

  const store = useAppSelector(state => state)

  // const [openSignup, setOpenSignup] = useState(false)
  // const [openLogin, setOpenLogin] = useState(false)
  // const [openSearch, setOpenSearch] = useState(false)

  // console.log(store)


  //fetch the word as a query from handleChange and filter it in the api data and display the result on webpage

  // API-Layer
  // oz6VL2fftuaDbPLT2yccJ9u2GFBUxOX9

  
// imageSearch
// newsSearch
// webSearch
// spellCheck
// autoComplete





// https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=f79a3ddecd6940f495d04ddace4d6980&include=minutely


  return (
    <div className="App">
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/imageSearch' element={<SearchPage />} />
          <Route path='/imageSearch/:id' element={<DisplayData />} />
          <Route path='/newsSearch' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
