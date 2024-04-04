import React from "react";
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} aboutText="About"/> */}
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/">  */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
        {/* <About /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
