import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link class="navbar-item" to="/">
            <img src="https://img.stackshare.io/service/5204/bulma-logo.png" alt="" srcset="" />
            <h1 className="is-size-4">InternSpace</h1>
          </Link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" to="/">
              Home
            </Link>
            <Link class="navbar-item" to="/internships">
              Internships
            </Link>
            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-link">
                Location
              </span>

              <div class="navbar-dropdown">
                <Link class="navbar-item" to="/internships/bangalore">
                  Bangalore
                </Link>
                <Link class="navbar-item" to="/internships/hyderabad">
                  Hyderabad
                </Link>
                <Link class="navbar-item" to="/internships/pune">
                  Pune
                </Link>
                <Link class="navbar-item" to="/internships/mumbai">
                  Mumbai
                </Link>
                <hr class="navbar-divider" />
                <Link class="navbar-item" to="/internships/international">
                  International
                </Link>
              </div>
            </div>
            <Link class="navbar-item" to="/about">
            About
            </Link>
            <Link class="navbar-item" to="/contact">
              Contact Us
            </Link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link class="button is-primary" to="/register">
                  <strong>Register</strong>
                </Link>
                <Link class="button is-light" to="/login">
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
