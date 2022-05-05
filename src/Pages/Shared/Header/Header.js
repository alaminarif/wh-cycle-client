import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingOut = () => {
    signOut(auth);
  };
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
              <CustomLink to="/inventory" className="nav-link ms-2">
                Inventory
              </CustomLink>
              <CustomLink to="/blogs" className="nav-link ms-2">
                Blogs
              </CustomLink>
              {user && (
                <>
                  {" "}
                  <CustomLink to="/manageitems" className="nav-link ms-2">
                    Manage Items
                  </CustomLink>
                  <CustomLink to="/additems" className="nav-link ms-2">
                    Add Item
                  </CustomLink>
                  <CustomLink to="/myitems" className="nav-link ms-2">
                    My Items
                  </CustomLink>
                </>
              )}
              {user ? (
                <CustomLink to="/signin" onClick={handleSingOut} className="nav-link ms-2">
                  SignOut
                </CustomLink>
              ) : (
                <CustomLink to="/signin" className="nav-link ms-2">
                  Sign in
                </CustomLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
