import React from 'react';
import HeaderBar from './ui/HeaderBar'
import Footer from './ui/Footer'
import Contents from './ui/Contents'
import './global.scss';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderBar />
      <Contents />
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
