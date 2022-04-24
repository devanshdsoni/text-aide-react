import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <b> {props.title}</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
          <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className={`form-check-label info text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool,
};

Navbar.defaultProps = {
  title: "Your title here",
  searchBar: true,
};
