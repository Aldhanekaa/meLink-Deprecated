import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {
    login: false
  }

  componentDidMount = () => {
    const mobileNavToggle = document.getElementById("icon-mobile-nav-toggle");
    const mobileNav = document.getElementById("nav-links");

    mobileNavToggle.addEventListener("click", () => {
      if (mobileNavToggle.classList.contains("fa-bars")) {
        this.displayMobileNav(mobileNavToggle, mobileNav);
      } else {
        this.hideMobileNav(mobileNavToggle, mobileNav);
      }
    });

    // simulate nav link functionality
    mobileNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        this.hideMobileNav(mobileNavToggle, mobileNav);
      }
    });

  }

  displayMobileNav = (mobileNavToggle, mobileNav) => {
    // change icon to times
    mobileNavToggle.className = "fas fa-times";
    // show mobile nav
    mobileNav.classList.add("active");
  }

  hideMobileNav = (mobileNavToggle, mobileNav) => {
    // change icon to bars
    mobileNavToggle.className = "fas fa-bars";
    // hide mobile nav
    mobileNav.classList.remove("active");
  }


  render() {
    return (
      <nav className="main-nav">

        <h2>MeLink</h2>
        <ul className="nav-links" id="nav-links">
          <li className="nav-link">
            <Link to="/section-features" className="nav-link-anchor">
              features
                        </Link>
          </li>
          <li className="nav-link">
            <Link to="/pricing" className="nav-link-anchor">
              Pricing
                        </Link>
          </li>
          <li className="nav-link">
            <Link to="/recourses" className="nav-link-anchor">
              resources
                        </Link>
          </li>
          <li className="nav-link"><a href="/signin" onClick={this.props.loginOrSignupClick} className="nav-link-anchor" id="login">login</a></li>
          <li className="nav-link">
            <a href="/login" className="nav-link-anchor btn btn-sign-up" id="signup" onClick={this.props.loginOrSignupClick} role="button"
            >sign up</a>
          </li>
        </ul>
        <i
          className="fas fa-bars"
          id="icon-mobile-nav-toggle"
        ></i>
      </nav>

    )
  }
}

export default Navbar;