import React, { useState } from "react";
import PropTypes from "prop-types";
import mode from "../assets/mode.svg";

export default function Navbar(props) {
  const [translate, setTranslate] = useState(true);
  // const [open, setOpen] = useState(false);
  // let openPalette = () => {
  //   if (open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // };
  let doTranslate = () => {
    if (translate) {
      setTranslate(false);
    } else {
      setTranslate(true);
    }
  };
  let modeClick = () => {
    props.modeToggler();
  };
  return (
    <>
      <header>
        <div className="wrapper-header container">
          <div className="hidden hamburger" onClick={doTranslate}>
            <img src="https://itsme-subid.github.io/Blog-2022/assets/hamburger.svg" alt=""/>
          </div>
          <div className="logo">
            <a href="/index.html">{props.title}</a>
          </div>
          <nav>
            <li>
              <a href="/index.html">{props.tabs[0]}</a>
            </li>
            <li>
              <a href="/index.html">{props.tabs[1]}</a>
            </li>
            <li>
              <a href="/index.html">{props.tabs[2]}</a>
            </li>
            <li>
              <a href="/index.html">{props.tabs[3]}</a>
            </li>
            {/* <li>
            <div className="palette" onClick={openPalette}>
              <div className="primary"></div>
              <div className="secondary"></div>
            </div>
            <div className={`open-palette ${!open ? "hidden": "grid"}`}>

              <div onClick={console.log("clicked")}>
              <div className="palette-open one">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked2")}>
              <div className="palette-open two">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked3")}>
              <div className="palette-open three">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked4")}>
              <div className="palette-open four">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked5")}>
              <div className="palette-open five">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked6")}>
              <div className="palette-open six">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked7")}>
              <div className="palette-open seven">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked8")}>
              <div className="palette-open eight">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
              <div onClick={console.log("clicked9")}>
              <div className="palette-open nine">
                <div className="primary"></div>
                <div className="secondary"></div>
              </div>
              </div>
            </div>
          </li> */}
          </nav>
          <li onClick={modeClick} className="mode">
            <img draggable="false" id="mode-toggler" src={mode} alt="Toggle" />
          </li>
        </div>
      </header>
      <div className={`sidebarDefault ${translate ? "translate" : "sidebar"}`}>
        <li>
          <a href="/index.html">{props.tabs[0]}</a>
        </li>
        <li>
          <a href="/index.html">{props.tabs[1]}</a>
        </li>
        <li>
          <a href="/index.html">{props.tabs[2]}</a>
        </li>
        <li>
          <a href="/index.html">{props.tabs[3]}</a>
        </li>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string),
};

Navbar.defaultProps = {
  title: "itsme-subid",
  tabs: ["home", "blog", "projects", "contact"],
};
