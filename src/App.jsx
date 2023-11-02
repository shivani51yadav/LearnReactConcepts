import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const[mode,setMode]=useState('light');  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#084e87';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils2"  mode={mode} toggleMode={toggleMode}  />
     <div className="container">
      <TextForm heading="Enter the text to analyze" mode={mode} />
     <About/>
     </div>
    </>
  )
}

export default App
