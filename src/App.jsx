import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {

  return (
    <>
     <Navbar title="TextUtils2" aboutText="aboutText" />
     <div className="container">
      <TextForm heading="Enter the text to analyze "/>
     <About/>
     </div>
    </>
  )
}

export default App
