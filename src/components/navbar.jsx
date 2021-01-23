import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-5">
        <div className="container">
          <Link className="navbar-brand  pr-3 h1" to="/">
            e<i className="fab fa-quora fa-2x"></i>ual
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto h5 p-2">
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/all-cards">
                    All Cards
                  </NavLink>
                </li>
              )}
              {user && user.biz && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                </li>
              )}

              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/favorites">
                    <i className="fas fa-heart text-danger"></i> Favorites
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              {!user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    signin
                  </NavLink>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    signup
                  </NavLink>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/biz-signup">
                    Business
                  </NavLink>
                </li>
              )}
              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              )}
              {user && (
                <li className="nav-item">
                  <NavLink title="profile" className="nav-link" to="/me">
                    <i className="far fa-user"></i>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
