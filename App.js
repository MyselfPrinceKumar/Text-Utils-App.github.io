import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import  { useState } from 'react'
// import About from "./components/About";
import "./App.css";
function App() {
  const [mode, setMode] = useState('light')  //Weather dark mode is enable or not
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }

    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
  }
  return (
    <>
      <Navbar name1="textUtils" name2="Home" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <div className="container my-3">
        </div>
        {/* <About/> */}
        <TextForm heading="Enter the texts" />
      </div>

    </>
  );
}

export default App;
