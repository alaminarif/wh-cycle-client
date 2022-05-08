import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <footer className="text-center mt-5">
      <p> copyright &copy; {date} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
