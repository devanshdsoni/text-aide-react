import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setTimeout(() => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#071E3D";
        document.body.style.transition = "0.2s";
        showAlert("Dark mode Enabled!", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "0.2s";
        showAlert("Light mode Enabled!", "success");
      }
    }, 200);
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  return (
    <Router>
      <Navbar title="TextAide" searchBar={false} mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About mode={mode} />
        </Route>
        <Route exact path="/">
          <div className="container my-3">
            <TextForm heading="Try TextAide - Word Counter, Character Counter, Manipulate Text" mode={mode} showAlert={showAlert} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
