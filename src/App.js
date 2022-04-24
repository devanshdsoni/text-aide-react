import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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
    <>
      <Navbar title="TextAide" searchBar={false} mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Try TextAide - Word Counter, Character Counter, Manipulate Text" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
};

export default App;
