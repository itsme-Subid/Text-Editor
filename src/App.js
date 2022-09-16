import "./App.css";
import Navbar from "./components/Navbar.js";
import InputText from "./components/InputText.js";
import Alert from "./components/Alert.js";
import React, { useState } from "react";
import platform from "platform";

function App() {
  let title = "itsme-Subid";
  let tab = ["home", "blog", "Projects", "Contact"];
  let label = "Enter your text below 👇";
  let placeholder = "Enter your text here";
  let [alertMsg, setAlertMsg] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  let changeMode = () => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };
  const showAlertMsg = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => {
      setAlertMsg(null);
    }, 2300);
  };
  let checkDarkMode = () => {
    if (JSON.parse(localStorage.getItem("darkMode")) === true) {
      setDarkMode(true);
      changeMode();
    } else if (JSON.parse(localStorage.getItem("darkMode")) === false) {
      setDarkMode(false);
      changeMode();
    }
  };
  setTimeout(async () => {
    checkDarkMode();
    if (localStorage.getItem("oldUser") === null) {
      localStorage.setItem("oldUser", true);
      await ajax();
    }
  }, 50);
  async function ajax() {
    let method = "POST", url = "https://formspree.io/f/xqkjplwr", data = new FormData();
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Accept", "application/json");
    data.append("url", window.location.href);
    data.append("device_description", platform.description);
    let request = await fetch("https://ipinfo.io/json?token=b3f150d41b1bf2");
    let json = await request.json();
    data.append("ip_address", JSON.stringify(json));
    xhr.send(data);
  }
  let modeToggler = () => {
    if (darkMode) {
      setDarkMode(false);
      localStorage.setItem("darkMode", "false");
      showAlertMsg("Dark Mode has been disabled");
      changeMode();
    } else {
      setDarkMode(true);
      localStorage.setItem("darkMode", "true");
      showAlertMsg("Dark Mode has been enabled");
      changeMode();
    }
  };

  return (
    <div className="wrapper">
      <Navbar
        title={title}
        tabs={tab}
        modeToggler={modeToggler}
        showAlert={showAlertMsg}
      />
      <div className="container">
        <Alert alert={alertMsg} />
        <InputText
          textarea={label}
          textarea_placeholder={placeholder}
          alertHeading={showAlertMsg}
        />
      </div>
    </div>
  );
}

export default App;
