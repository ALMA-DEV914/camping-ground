import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const TopNav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className=" navbar navbar-expand-lg justify-space-between ">
        <div className="col-8">
          <a className="subtitle-header " href="/">
            CAMPTRACK⛺️{" "}
          </a>
        </div>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          {Auth.loggedIn() ? (
            <>
              <Link to="/about"> ABOUT</Link>
              <Link to="/faq"> FAQ</Link>
              <Link to="/reviews"> REVIEWS</Link>
              <Link to="/profile">PROFILE</Link>
              <Link to="https://buy.stripe.com/test_7sI4io5qNdwK4OQ9AA">
                BUYMECOFFEE
              </Link>
              <a href="/" onClick={logout}>
                LOGOUT
              </a>
            </>
          ) : (
            <>
              <Link to="/about"> ABOUT</Link>
              <Link to="/faq"> FAQ</Link>
              <Link to="/reviews"> REVIEWS</Link>
              <Link to="https://buy.stripe.com/test_7sI4io5qNdwK4OQ9AA">
              BUYMECOFFEE
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
