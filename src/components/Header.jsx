import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <header className="navigation">
      <nav className="navbar navbar-expand-lg py-2" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" alt="" className="navbar-brand-img" />
          </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars text-black">
              <AiOutlineMenu />
            </span>
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="navbarsExample09"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/services"}>
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>

            <form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
              <Link
                to={"/contact"}
                className="btn btn-solid-border btn-round-full"
              >
                Get a Quote
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
