import './App.css';
import React, { useState } from 'react';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
// import About from './Component/About';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
      document.body.style.backgroundColor = '#171529';
      // document.title = 'textutile - Dark mood';
    } else {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
      document.body.style.backgroundColor = 'white';
      // document.title = 'textutile - light mood';
    }
  };

  return (
        <div>
          <Navbar title='Textutiles' mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />
           {/* <About mode={mode}/> */}
        </div>
        
      );
    }

export default App;