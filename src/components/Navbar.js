import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  componentDidMount() {
    this.addNavbarToggleListener()
  }

  addNavbarToggleListener = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://img.stackshare.io/service/5204/bulma-logo.png" alt="" srcSet="" />
            <h1 className="is-size-4">InternSpace</h1>
          </Link>

          <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="internSpaceNavbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="internSpaceNavbar" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/internships">
              Internships
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">
                Location
              </span>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/internships/bangalore">
                  Bangalore
                </Link>
                <Link className="navbar-item" to="/internships/hyderabad">
                  Hyderabad
                </Link>
                <Link className="navbar-item" to="/internships/pune">
                  Pune
                </Link>
                <Link className="navbar-item" to="/internships/mumbai">
                  Mumbai
                </Link>
                <Link className="navbar-item" to="/internships/delhi">
                  Delhi
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/internships/international">
                  International
                </Link>
              </div>
            </div>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/register">
                  <strong>Register</strong>
                </Link>
                <Link className="button is-light" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
