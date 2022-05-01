import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <CustomLink to="/home" className="navbar-brand text-light">
            Dantario
          </CustomLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <CustomLink to="/" className="nav-link " aria-current="page">
                Home
              </CustomLink>
              <CustomLink to="/services" className="nav-link ms-2">
                Inventory
              </CustomLink>
              <CustomLink to="/blogs" className="nav-link ms-2">
                Blogs
              </CustomLink>
              <CustomLink to="/about" className="nav-link ms-2">
                About Me
              </CustomLink>
              <CustomLink to="/signup" className="nav-link ms-2">
                Signup
              </CustomLink>
              <CustomLink to="/signin" className="nav-link ms-2">
                Signin
              </CustomLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
