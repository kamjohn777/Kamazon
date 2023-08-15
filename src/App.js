// import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
// import { BrowserRouter as Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

// import { useState } from 'react';
// import { useEffect } from 'react';

// import { BrowserRouter, Routes, Route, useLocation, useEffect, useState } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Icons } from '@mui/icons-material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51NfAwmFUHyppZGVY36ksBofsKNusF4kvcR26jt6dzxKL0M1r6P3GljskUwY76NItVSAUjfb79VusJcxMfDdOIopU00y7lc5kW8');

function App() {
// const location = useLocation();
// const [showHeader, setShowHeader] = useState(true);
// const location = useLocation();

// useEffect(() => {
//   if (location.pathname === '/login') {
//     setShowHeader(false);
//   } else {
//     setShowHeader(true);
//   }
// }, [location.pathname]);
  const [{}, dispatch] = useStateValue();

useEffect(() => {
  // will run once when app componet loads
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);

    if (authUser) {
      // user loggedIn
      dispatch({
        type: 'SET_USER',
        user: authUser,
      })
    } else {
      // user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

return (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);
}

function AppContent() {
const location = useLocation();
const [showHeader, setShowHeader] = useState(true);

useEffect(() => {
  if (location.pathname === '/login') {
    setShowHeader(false);
  } else {
    setShowHeader(true);
  }
}, [location.pathname]);

//   return (
//    <BrowserRouter>
//     <div className="App">
      {/* <Header /> */}
      {/* {location.pathname !== '/login' && <Header />} */}
    //   {showHeader && <Header />}
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/checkout' element={<Checkout />} />
    //     <Route path='/' element={<Home />} />
    //   </Routes>
    // </div>
    // </BrowserRouter>

 




    return (
      <div className="App">
        {showHeader && <Header />}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          {/* <Elements stripe={promise}/> */}
          {/* <Route path='/payment' element={<Payment />} /> */}
          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
   
  );
}


export default App;
