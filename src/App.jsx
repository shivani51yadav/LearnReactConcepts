import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#084e87";
      showAlert("Dark mode has been enable", "success");
      // document.title = "TextUtils - Dark Mode"; //changing title dynamically
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="my-3 pageLayout">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
