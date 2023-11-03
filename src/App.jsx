import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light');  
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#084e87';
      showAlert("Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
    }
  }
  return (
    <>
     <Navbar title="TextUtils2"  mode={mode} toggleMode={toggleMode}  />
     <Alert alert={alert}/>
     <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
     <About/>
     </div>
    </>
  )
}

export default App
